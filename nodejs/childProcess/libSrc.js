// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const {
    ArrayIsArray,
    NumberIsInteger,
    ObjectAssign,
    ObjectDefineProperty,
    ObjectPrototypeHasOwnProperty,
    Promise,
} = primordials;

const {
    promisify,
    convertToValidSignal,
    getSystemErrorName
} = require('internal/util');
const { isArrayBufferView } = require('internal/util/types');
const debug = require('internal/util/debuglog').debuglog('child_process');
const { Buffer } = require('buffer');
const { Pipe, constants: PipeConstants } = internalBinding('pipe_wrap');
const {
    ERR_INVALID_ARG_VALUE,
    ERR_CHILD_PROCESS_IPC_REQUIRED,
    ERR_CHILD_PROCESS_STDIO_MAXBUFFER,
    ERR_INVALID_ARG_TYPE,
    ERR_OUT_OF_RANGE
} = require('internal/errors').codes;
const { clearTimeout, setTimeout } = require('timers');
const { validateString, isInt32 } = require('internal/validators');
const child_process = require('./interSrc');
const {
    getValidStdio,
    setupChannel,
    ChildProcess,
    stdioStringToArray
} = child_process;

const MAX_BUFFER = 1024 * 1024;

function fork(modulePath /* , args, options */) {

    // Get options and args arguments.
    let execArgv;
    let options = {};
    let args = [];
    let pos = 1;
    if (pos < arguments.length && ArrayIsArray(arguments[pos])) {
        args = arguments[pos++];
    }

    if (pos < arguments.length
        && (arguments[pos] === undefined || arguments[pos] === null)) {
        pos++;
    }

    if (pos < arguments.length && arguments[pos] != null) {
        if (typeof arguments[pos] !== 'object') {
            throw new ERR_INVALID_ARG_VALUE(`arguments[${pos}]`, arguments[pos]);
        }

        options = { ...arguments[pos++] };
    }

    // Prepare arguments for fork:
    execArgv = options.execArgv || process.execArgv;

    if (execArgv === process.execArgv && process._eval != null) {
        const index = execArgv.lastIndexOf(process._eval);
        if (index > 0) {
            // Remove the -e switch to avoid fork bombing ourselves.
            execArgv = execArgv.slice();
            execArgv.splice(index - 1, 2);
        }
    }

    args = execArgv.concat([modulePath], args);

    if (typeof options.stdio === 'string') {
        options.stdio = stdioStringToArray(options.stdio, 'ipc');
    } else if (!ArrayIsArray(options.stdio)) {
        // Use a separate fd=3 for the IPC channel. Inherit stdin, stdout,
        // and stderr from the parent if silent isn't set.
        options.stdio = stdioStringToArray(
            options.silent ? 'pipe' : 'inherit',
            'ipc');
    } else if (!options.stdio.includes('ipc')) {
        throw new ERR_CHILD_PROCESS_IPC_REQUIRED('options.stdio');
    }

    options.execPath = options.execPath || process.execPath;
    options.shell = false;

    return spawn(options.execPath, args, options);
}

function _forkChild(fd, serializationMode) {
    // set process.send()
    const p = new Pipe(PipeConstants.IPC);
    p.open(fd);
    p.unref();
    const control = setupChannel(process, p, serializationMode);
    process.on('newListener', function onNewListener(name) {
        if (name === 'message' || name === 'disconnect') control.ref();
    });
    process.on('removeListener', function onRemoveListener(name) {
        if (name === 'message' || name === 'disconnect') control.unref();
    });
}

function normalizeExecArgs(command, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = undefined;
    }

    // Make a shallow copy so we don't clobber the user's options object.
    options = { ...options };
    options.shell = typeof options.shell === 'string' ? options.shell : true;

    return {
        file: command,
        options: options,
        callback: callback
    };
}


function exec(command, options, callback) {
    const opts = normalizeExecArgs(command, options, callback);
    return module.exports.execFile(opts.file,
        opts.options,
        opts.callback);
}


function execFile(file /* , args, options, callback */) {
    let args = [];
    let callback;
    let options;

    // Parse the optional positional parameters.
    let pos = 1;
    if (pos < arguments.length && ArrayIsArray(arguments[pos])) {
        args = arguments[pos++];
    } else if (pos < arguments.length && arguments[pos] == null) {
        pos++;
    }

    if (pos < arguments.length && typeof arguments[pos] === 'object') {
        options = arguments[pos++];
    } else if (pos < arguments.length && arguments[pos] == null) {
        pos++;
    }

    if (pos < arguments.length && typeof arguments[pos] === 'function') {
        callback = arguments[pos++];
    }

    if (!callback && pos < arguments.length && arguments[pos] != null) {
        throw new ERR_INVALID_ARG_VALUE('args', arguments[pos]);
    }

    options = {
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: MAX_BUFFER,
        killSignal: 'SIGTERM',
        cwd: null,
        env: null,
        shell: false,
        ...options
    };

    // Validate the timeout, if present.
    validateTimeout(options.timeout);

    // Validate maxBuffer, if present.
    validateMaxBuffer(options.maxBuffer);

    options.killSignal = sanitizeKillSignal(options.killSignal);

    const child = spawn(file, args, {
        cwd: options.cwd,
        env: options.env,
        gid: options.gid,
        uid: options.uid,
        shell: options.shell,
        windowsHide: !!options.windowsHide,
        windowsVerbatimArguments: !!options.windowsVerbatimArguments
    });

    let encoding;
    const _stdout = [];
    const _stderr = [];
    if (options.encoding !== 'buffer' && Buffer.isEncoding(options.encoding)) {
        encoding = options.encoding;
    } else {
        encoding = null;
    }
    let stdoutLen = 0;
    let stderrLen = 0;
    let killed = false;
    let exited = false;
    let timeoutId;

    let ex = null;

    let cmd = file;

    function exithandler(code, signal) {
        if (exited) return;
        exited = true;

        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        if (!callback) return;

        // merge chunks
        let stdout;
        let stderr;
        if (encoding ||
            (
                child.stdout &&
                child.stdout.readableEncoding
            )) {
            stdout = _stdout.join('');
        } else {
            stdout = Buffer.concat(_stdout);
        }
        if (encoding ||
            (
                child.stderr &&
                child.stderr.readableEncoding
            )) {
            stderr = _stderr.join('');
        } else {
            stderr = Buffer.concat(_stderr);
        }

        if (!ex && code === 0 && signal === null) {
            callback(null, stdout, stderr);
            return;
        }

        if (args.length !== 0)
            cmd += ` ${args.join(' ')}`;

        if (!ex) {
            // eslint-disable-next-line no-restricted-syntax
            ex = new Error('Command failed: ' + cmd + '\n' + stderr);
            ex.killed = child.killed || killed;
            ex.code = code < 0 ? getSystemErrorName(code) : code;
            ex.signal = signal;
        }

        ex.cmd = cmd;
        callback(ex, stdout, stderr);
    }

    function errorhandler(e) {
        ex = e;

        if (child.stdout)
            child.stdout.destroy();

        if (child.stderr)
            child.stderr.destroy();

        exithandler();
    }

    function kill() {
        if (child.stdout)
            child.stdout.destroy();

        if (child.stderr)
            child.stderr.destroy();

        killed = true;
        try {
            child.kill(options.killSignal);
        } catch (e) {
            ex = e;
            exithandler();
        }
    }

    if (options.timeout > 0) {
        timeoutId = setTimeout(function delayedKill() {
            kill();
            timeoutId = null;
        }, options.timeout);
    }

    if (child.stdout) {
        if (encoding)
            child.stdout.setEncoding(encoding);

        child.stdout.on('data', function onChildStdout(chunk) {
            const encoding = child.stdout.readableEncoding;
            const length = encoding ?
                Buffer.byteLength(chunk, encoding) :
                chunk.length;
            stdoutLen += length;

            if (stdoutLen > options.maxBuffer) {
                const truncatedLen = options.maxBuffer - (stdoutLen - length);
                _stdout.push(chunk.slice(0, truncatedLen));

                ex = new ERR_CHILD_PROCESS_STDIO_MAXBUFFER('stdout');
                kill();
            } else {
                _stdout.push(chunk);
            }
        });
    }

    if (child.stderr) {
        if (encoding)
            child.stderr.setEncoding(encoding);

        child.stderr.on('data', function onChildStderr(chunk) {
            const encoding = child.stderr.readableEncoding;
            const length = encoding ?
                Buffer.byteLength(chunk, encoding) :
                chunk.length;
            stderrLen += length;

            if (stderrLen > options.maxBuffer) {
                const truncatedLen = options.maxBuffer - (stderrLen - length);
                _stderr.push(chunk.slice(0, truncatedLen));

                ex = new ERR_CHILD_PROCESS_STDIO_MAXBUFFER('stderr');
                kill();
            } else {
                _stderr.push(chunk);
            }
        });
    }

    child.addListener('close', exithandler);
    child.addListener('error', errorhandler);

    return child;
}

function normalizeSpawnArguments(file, args, options) {
    validateString(file, 'file');

    if (file.length === 0)
        throw new ERR_INVALID_ARG_VALUE('file', file, 'cannot be empty');

    if (ArrayIsArray(args)) {
        args = args.slice(0);
    } else if (args == null) {
        args = [];
    } else if (typeof args !== 'object') {
        throw new ERR_INVALID_ARG_TYPE('args', 'object', args);
    } else {
        options = args;
        args = [];
    }

    if (options === undefined)
        options = {};
    else if (options === null || typeof options !== 'object')
        throw new ERR_INVALID_ARG_TYPE('options', 'object', options);

    // Validate the cwd, if present.
    if (options.cwd != null &&
        typeof options.cwd !== 'string') {
        throw new ERR_INVALID_ARG_TYPE('options.cwd', 'string', options.cwd);
    }

    // Validate detached, if present.
    if (options.detached != null &&
        typeof options.detached !== 'boolean') {
        throw new ERR_INVALID_ARG_TYPE('options.detached',
            'boolean', options.detached);
    }

    // Validate the uid, if present.
    if (options.uid != null && !isInt32(options.uid)) {
        throw new ERR_INVALID_ARG_TYPE('options.uid', 'int32', options.uid);
    }

    // Validate the gid, if present.
    if (options.gid != null && !isInt32(options.gid)) {
        throw new ERR_INVALID_ARG_TYPE('options.gid', 'int32', options.gid);
    }

    // Validate the shell, if present.
    if (options.shell != null &&
        typeof options.shell !== 'boolean' &&
        typeof options.shell !== 'string') {
        throw new ERR_INVALID_ARG_TYPE('options.shell',
            ['boolean', 'string'], options.shell);
    }

    // Validate argv0, if present.
    if (options.argv0 != null &&
        typeof options.argv0 !== 'string') {
        throw new ERR_INVALID_ARG_TYPE('options.argv0', 'string', options.argv0);
    }

    // Validate windowsHide, if present.
    if (options.windowsHide != null &&
        typeof options.windowsHide !== 'boolean') {
        throw new ERR_INVALID_ARG_TYPE('options.windowsHide',
            'boolean', options.windowsHide);
    }

    // Validate windowsVerbatimArguments, if present.
    let { windowsVerbatimArguments } = options;
    if (windowsVerbatimArguments != null &&
        typeof windowsVerbatimArguments !== 'boolean') {
        throw new ERR_INVALID_ARG_TYPE('options.windowsVerbatimArguments',
            'boolean',
            windowsVerbatimArguments);
    }

    if (options.shell) {
        const command = [file].concat(args).join(' ');
        // Set the shell, switches, and commands.
        if (process.platform === 'win32') {
            if (typeof options.shell === 'string')
                file = options.shell;
            else
                file = process.env.comspec || 'cmd.exe';
            // '/d /s /c' is used only for cmd.exe.
            if (/^(?:.*\\)?cmd(?:\.exe)?$/i.test(file)) {
                args = ['/d', '/s', '/c', `"${command}"`];
                windowsVerbatimArguments = true;
            } else {
                args = ['-c', command];
            }
        } else {
            if (typeof options.shell === 'string')
                file = options.shell;
            else if (process.platform === 'android')
                file = '/system/bin/sh';
            else
                file = '/bin/sh';
            args = ['-c', command];
        }
    }

    if (typeof options.argv0 === 'string') {
        args.unshift(options.argv0);
    } else {
        args.unshift(file);
    }

    const env = options.env || process.env;
    const envPairs = [];

    // process.env.NODE_V8_COVERAGE always propagates, making it possible to
    // collect coverage for programs that spawn with white-listed environment.
    if (process.env.NODE_V8_COVERAGE &&
        !ObjectPrototypeHasOwnProperty(options.env || {}, 'NODE_V8_COVERAGE')) {
        env.NODE_V8_COVERAGE = process.env.NODE_V8_COVERAGE;
    }

    // Prototype values are intentionally included.
    for (const key in env) {
        const value = env[key];
        if (value !== undefined) {
            envPairs.push(`${key}=${value}`);
        }
    }

    return {
        // Make a shallow copy so we don't clobber the user's options object.
        ...options,
        args,
        detached: !!options.detached,
        envPairs,
        file,
        windowsHide: !!options.windowsHide,
        windowsVerbatimArguments: !!windowsVerbatimArguments
    };
}

function spawn(file, args, options) {
    const child = new ChildProcess();

    options = normalizeSpawnArguments(file, args, options);
    debug('spawn', options);
    child.spawn(options);

    return child;
}

function validateTimeout(timeout) {
    if (timeout != null && !(NumberIsInteger(timeout) && timeout >= 0)) {
        throw new ERR_OUT_OF_RANGE('timeout', 'an unsigned integer', timeout);
    }
}

module.exports = {
    _forkChild,
    ChildProcess,
    exec,
    execFile,
    execFileSync,
    execSync,
    fork,
    spawn,
    spawnSync
};