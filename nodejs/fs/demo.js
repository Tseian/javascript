const fs = require("fs");
const path = require("path");
const os = require("os")
const assert = require('assert');
const fsPromises = require('fs').promises;
// 到达当前文件夹路径
// /Users/xieweicheng/Downloads/study/javascript/nodejs/fs
console.log(process.cwd())

// 1.文件路径
// 大多数 fs 操作接受的文件路径可以指定为字符串、Buffer、或使用 file: 协议的 URL 对象。
// 字符串形式的路径被解析为标识绝对或相对文件名的 UTF-8 字符序列。 相对路径将相对于 process.cwd() 指定的当前工作目录进行解析。

fs.open("demo.js", "r", (e, d) => {
    console.log('d', d);
    // d 文件描述符 一定要关闭文件描述符
    fs.close(d, (er) => {
        console.log(er)
    })
})
// 2.URL对象的支持
// const fs = require('fs');
// const fileUrl = new URL('file:///tmp/hello');
// fs.readFileSync(fileUrl);

// 线程池的使用
// 所有的文件系统 API，除了 fs.FSWatcher() 和那些显式同步的之外，
// 都使用 libuv 的线程池，这对某些应用程序可能会产生意外和负面的性能影响。
// 大多数操作系统限制在任何给定时间内可能打开的文件描述符的数量，
// 因此当操作完成时关闭描述符至关重要。 如果不这样做将导致内存泄漏，最终导致应用程序崩溃。

// 3.文件描述符 
// 在 POSIX 系统上，对于每个进程，内核都维护着一张当前打开着的文件和资源的表格
// 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符。
// 在系统层，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定的文件。

// 4.fs.Dirent 类
// 当使用 withFileTypes 选项设置为 true 调用 fs.readdir() 或 fs.readdirSync() 时，
// 生成的数组将填充 fs.Dirent 对象，而不是字符串或 Buffer。
// cwd current work dir 当前工作文件夹
fs.readdir(process.cwd(), { withFileTypes: true }, function (err, diren) {
    let demo = diren.find((d) => d.name == 'demo.js');
    let dir = diren.find((d) => d.name == 'dir');
    console.log(demo);
    console.log(dir);

    // 如果 fs.Dirent 对象描述块设备，则返回 true。
    console.log("demo.isBlockDevice====", demo.isBlockDevice());
    // 如果 fs.Dirent 对象描述字符设备，则返回 true。
    console.log("demo.isCharacterDevice====", demo.isCharacterDevice());
    // 如果 fs.Dirent 对象描述文件系统目录，则返回 true。
    console.log("demo.isDirectory====", demo.isDirectory());
    // 如果 fs.Dirent 对象描述先进先出（FIFO）管道，则返回 true。
    console.log("demo.isFIFO====", demo.isFIFO());
    // 如果 fs.Dirent 对象描述常规文件，则返回 true。
    console.log("demo.isFile====", demo.isFile());
    // 如果 fs.Dirent 对象描述套接字，则返回 true。
    console.log("demo.isSocket====", demo.isSocket());
    // 如果 fs.Dirent 对象描述符号链接，则返回 true。
    console.log("demo.isSymbolicLink====", demo.isSymbolicLink());

    // fs.Dirent 对象指向的文件名。 
    // 此值的类型取决于传递给 fs.readdir() 或 fs.readdirSync() 的 options.encoding。
    console.log("demo.name====", demo.name);

});


// 5.fs.FSWatcher 类
// 每当指定监视的文件被修改时，所有的 fs.FSWatcher 对象都会触发 'change' 事件。
let watcher = fs.watch(__filename, (eventType, filename) => {
    console.log("watching", eventType, filename)
});
let index = 0;

watcher.on("change", function (eventType, filename) {
    console.log(eventType, filename, "change index==", index++);
});
// 当监视器停止监视更改时触发。 关闭的 fs.FSWatcher 对象在事件处理函数中不再可用。
watcher.on('close', function (error) {
    console.log("closing watch", error);
});

setTimeout(() => {
    watcher.close();
}, 5000);


// 6.ReadStream类  继承自: <stream.Readable>  
// 成功调用 fs.createReadStream() 将会返回一个新的 fs.ReadStream 对象。

let readStream = fs.createReadStream(__filename, {});

// 当 fs.ReadStream 的底层文件描述符已关闭时触发。 close事件
readStream.on('close', function (error) {
})

// 当 fs.ReadStream 的文件描述符打开时触发。open事件
readStream.on('open', function (error) {
})
// 当 fs.ReadStream 准备好使用时触发。'open' 事件之后立即触发。
readStream.on('ready', function (error) {
})
// 到目前为止已读取的字节数
console.log('readStream.bytesRead=====', readStream.bytesRead);
// 流正在读取的文件的路径，由 fs.createReadStream() 的第一个参数指定。 如果 path 传入字符串，
// 则 readStream.path 将是字符串。 如果 path 传入 Buffer，则 readStream.path 将是 Buffer。
console.log('readStream.path====', readStream.path);
console.log('readStream.pending====', readStream.pending);

// fs.Stats 类  fs.Stats 对象提供了关于文件的信息。
//从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步的方法返回的对象都属于此类型。
// 如果传给这些方法的 options 中的 bigint 为 true，则数值将会为 bigint 型而不是 number 型，
// 并且该对象将会包含额外的以 Ns 为后缀的纳秒精度的属性。

fs.stat(__filename, function (err, stats) {


    // stats.isBlockDevice()  是不是块设备
    // stats.isCharacterDevice() 是不是字符设备
    // stats.isDirectory() 是不是文件夹
    // stats.isFile() 是不是文件
    // stats.isSocket() 是不是socket套接字

    // stats.dev 该文件的设备的数字标识符
    console.log('stats.dev==', stats.dev)
    // stats.ino 文件系统特定的文件索引节点编号。
    console.log('stats.ino==', stats.ino)

    // 描述文件类型和模式的位字段
    console.log('stats.mode==', stats.mode)

    // 文件存在的硬链接数。
    console.log('stats.nlink==', stats.nlink);

    // stats.size 文件大小
    console.log('stats.size==', stats.size);

    // stats.gid 拥有该文件（POSIX）的群组的数字型群组标识符。
    console.log('stats.gid==', stats.gid);

    // stats.blksize 用于 I/O 操作的文件系统块的大小。
    console.log('stats.blksize==', stats.blksize);

    // stats.blocks 为此文件分配的块数
    console.log('stats.blocks==', stats.blocks);

    // stats.birthtimeMs  表明此文件的创建时间的时间戳，以 POSIX 纪元以来的毫秒数表示
    console.log(stats.birthtimeMs);
});


//7.fs.WriteStream 类 继承自 <stream.Writable>
// close open ready 具有这些事件

// bytesWritten 到目前为止写入的字节数

// path 流正在写入的路径

// pending 如果底层的文件还未被打开（即在触发 'ready' 事件之前），则此属性为 true。

// 8.fs.access(path[, mode], callback)  测试用户对 path 指定的文件或目录的权限。 
// 如果可访问性检查失败，则错误参数将是 Error 对象。
// mode 常量
// 不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查文件的可访问性。 
//这样做会引入竞态条件，因为其他进程可能会在两个调用之间更改文件的状态。 
//相反，应该直接打开、读取或写入文件，如果文件无法访问则处理引发的错误。
fs.access(__filename, fs.constants.F_OK, function (err) {
    console.log("access====", !!err);
});

// 写入文件推荐做法
fs.open(__dirname + "/dir/ha.txt", 'w', function (err, fd) {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('myfile 已存在');
            return;
        }

        throw err;
    } else {
        console.log("具有权限")
    }
    // fs.close(fd, function (e) {
    //     console.log("ee")
    // });
    fs.appendFile(fd, 'hello world222', { encoding: 'utf-8' }, function (e) {
        console.log(e);
        fs.close(fd, function (e) {
            if (!e) console.log("ee")
        });
    });


});

// 9.fs.chmod(path, mode, callback) 异步地更改文件的权限。 除了可能的异常，完成回调没有其他参数。
//构造 mode 更简单的方法是使用三个八进制数字的序列（ 例如 765）。 
// 最左边的数字（示例中的 7） 指定文件所有者的权限。 
// 中间的数字（示例中的 6）   指定群组的权限。 
// 最右边的数字（示例中的 5） 指定其他人的权限。
fs.chmod(__dirname + "/dir/ha.txt", 0o775, (err) => {
    if (err) throw err;
    console.log('文件 “my_file.txt” 的权限已被更改');
});
/*
数字	说明
7	可读、可写、可执行
6	可读、可写
5	可读、可执行
4	只读
3	可写、可执行
2	只写
1	只可执行
0	没有权限
*/

// 10.fs.chown(path, uid, gid, callback) 异步地更改文件的所有者和群组。

// 11.fs.close(fd, callback)

// 12.fs.constants 返回包含文件系统操作常用常量的对象。 当前定义的特定常量在 FS 常量中描述

// 13.fs.copyFile(src, dest[, flags], callback)  异步地将 src 拷贝到 dest。

// 14.fs.createReadStream(path[, options])  
// 与用于可读流的 16 kb 的默认的 highWaterMark 不同，
// 此方法返回的流具有 64 kb 的默认的 highWaterMark。

/*
// path <string> | <Buffer> | <URL>
// options <string> | <Object>

// flags <string> 参阅支持的文件系统标志。默认值: 'r'。
// encoding <string> 默认值: null。
// fd <integer> 默认值: null。  如果指定了 fd，则 ReadStream 将会忽略 path 参数并将会使用指定的文件描述符。 
// mode <integer> 默认值: 0o666。
// autoClose <boolean> 默认值: true。
// emitClose <boolean> 默认值: false。
// start <integer>  与end一起设置读取规范
// end <integer> 默认值: Infinity。
// highWaterMark <integer> 默认值: 64 * 1024。
// 返回: <fs.ReadStream>
*/

const readStream1 = fs.createReadStream(__filename, {
    highWaterMark: 1024 * 64,
    start: 10,
    end: 20
});
// console.log("toString(readStream)===", readStream);

// 15.fs.createWriteStream(path[, options])
/*
// path <string> | <Buffer> | <URL>
// options <string> | <Object>

// flags <string> 参阅支持的文件系统标志。默认值: 'w'。 若要修改文件而不是覆盖它，则 flags 模式需要为 r+ 而不是默认的 w 模式。
// encoding <string> 默认值: 'utf8'。
// fd <integer> 默认值: null。
// mode <integer> 默认值: 0o666。
// autoClose <boolean> 默认值: true。
// emitClose <boolean> 默认值: false。
// start <integer> 设置从文件的开头之后的某个位置写入数据
// 返回: <fs.WriteStream>
*/

let dstr = `hehesdfasdfasdfhehesdfasdfasdfhehesdfasdfasdfhehesdfasdfasdfhe`
fs.writeFileSync(__dirname + "/dir/truncate.txt", dstr);
let fd = fs.openSync(__dirname + "/dir/truncate.txt", 'w+')
fs.appendFileSync(__dirname + "/dir/truncate.txt", dstr);
fs.ftruncate(fd, 4, (e) => {
    assert.ifError(e);
    // fs.close(fd, function (e) { });
})

// 16.fs.mkdir 异步地创建目录。
fs.mkdir(__dirname + "/mkdir", {}, function (e) {
    if (e) console.log(e.message);
})

// fs.mkdtemp(prefix[, options], callback)  创建一个唯一的临时目录。
fs.mkdtemp(path.join(os.tmpdir(), '目录-'), (err, folder) => {
    if (err) throw err;
    console.log(folder);
    // 打印: /tmp/目录-itXde2 或 C:\Users\...\AppData\Local\Temp\目录-itXde2
});

fs.appendFileSync(__dirname + "/dir/truncate.txt", dstr);

//17.fs.read(fd, buffer, offset, length, position, callback)
// buffer 数据将写入的缓冲区
// offset buffer 中开始写入的偏移量
// length 指定要读取的偏移量

fs.read(fd, Buffer.alloc(1024 * 1024), 12, 12, (e, by, buf) => {
    console.log("fs.read(fd, Buffer.alloc(1024 * 1024),====", e, by, buf);
})

// fs.readdir(path[, options], callback)  读取文件夹

// fs.readFile(path[, options], callback)  读取文件

// fs.unlink(path, callback) 删除文件

// 删除文件夹
fs.rmdir(__dirname + "/mkdir", () => { })

// fs.unwatchFile(filename[, listener])  停止监视 filename 的变化。

// 监视 filename 的更改。每当访问文件时都会调用 listener 回调。
//  应尽可能使用 fs.watch 代替 fs.watchFile 和 fs.unwatchFile。
fs.watchFile(__filename, (curr, prev) => {
    console.log(`当前的最近修改时间是: ${curr.mtime}`);
    console.log(`之前的最近修改时间是: ${prev.mtime}`);
})
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// 将 buffer 写入到 fd 指定的文件。

// fs.write(fd, string[, position[, encoding]], callback) 
// 将 string 写入到 fd 指定的文件。 如果 string 不是一个字符串，则该值会被强制转换为字符串

// fs.writeFile(file, data[, options], callback)

// FileHandle 类 FileHandle 对象是数字文件描述符的包装器。 FileHandle 的实例与数字文件描述符的不同之处在于它们提供了一个面向对象的 API 来处理文件。


fsPromises.open(__dirname + "/dir/truncate.txt", 'w+').then((fdhandler) => {
    console.log(fdhandler.df)
})

