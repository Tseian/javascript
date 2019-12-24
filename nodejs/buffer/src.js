// 预分配的buffer函数 没有进行填0

function createPool() {
    poolSize = Buffer.poolSize;
    allocPool = createUnsafeBuffer(poolSize).buffer;
    poolOffset = 0;
}

// allocUnsafe 回到用
// FastBuffer 继承自 uinitArray
// FastBuffer.prototype.constructor = Buffer;
// Buffer.prototype = FastBuffer.prototype;
// addBufferPrototypeMethods(Buffer.prototype);
function createUnsafeBuffer(size) {
    zeroFill[0] = 0;
    try {
        return new FastBuffer(size);
    } finally {
        zeroFill[0] = 1;
    }
}

function alignPool() {
    // Ensure aligned slices
    if (poolOffset & 0x7) {
        poolOffset |= 0x7;
        poolOffset++;
    }
}

function alloc(size, fill, encoding) {
    assertSize(size);
    if (fill !== undefined && fill !== 0 && size > 0) {
        const buf = createUnsafeBuffer(size);
        return _fill(buf, fill, 0, buf.length, encoding);
    }
    return new FastBuffer(size);
}

function allocUnsafe(size) {
    assertSize(size);
    return allocate(size);
}

function allocate(size) {
    if (size <= 0) {
        return new FastBuffer();
    }
    if (size < (Buffer.poolSize >>> 1)) {
        if (size > (poolSize - poolOffset))
            createPool();
        const b = new FastBuffer(allocPool, poolOffset, size);
        poolOffset += size;
        alignPool();
        return b;
    }
    return createUnsafeBuffer(size);
}

function allocUnsafeSlow(size) {
    assertSize(size);
    return createUnsafeBuffer(size);
};


function from(value, encodingOrOffset, length) {
    if (typeof value === 'string')
        return fromString(value, encodingOrOffset);

    if (typeof value === 'object' && value !== null) {
        if (isAnyArrayBuffer(value))
            return fromArrayBuffer(value, encodingOrOffset, length);

        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null &&
            valueOf !== value &&
            (typeof valueOf === 'string' || typeof valueOf === 'object')) {
            return from(valueOf, encodingOrOffset, length);
        }

        const b = fromObject(value);
        if (b)
            return b;

        if (typeof value[SymbolToPrimitive] === 'function') {
            const primitive = value[SymbolToPrimitive]('string');
            if (typeof primitive === 'string') {
                return fromString(primitive, encodingOrOffset);
            }
        }
    }

    throw new ERR_INVALID_ARG_TYPE(
        'first argument',
        ['string', 'Buffer', 'ArrayBuffer', 'Array', 'Array-like Object'],
        value
    );
};

function fromArrayBuffer(obj, byteOffset, length) {
    // Convert byteOffset to integer
    if (byteOffset === undefined) {
        byteOffset = 0;
    } else {
        byteOffset = +byteOffset;
        if (NumberIsNaN(byteOffset))
            byteOffset = 0;
    }

    const maxLength = obj.byteLength - byteOffset;

    if (maxLength < 0)
        throw new ERR_BUFFER_OUT_OF_BOUNDS('offset');

    if (length === undefined) {
        length = maxLength;
    } else {
        // Convert length to non-negative integer.
        length = +length;
        if (length > 0) {
            if (length > maxLength)
                throw new ERR_BUFFER_OUT_OF_BOUNDS('length');
        } else {
            length = 0;
        }
    }

    return new FastBuffer(obj, byteOffset, length);
}

function fromObject(obj) {
    if (isUint8Array(obj)) {
        const b = allocate(obj.length);

        if (b.length === 0)
            return b;

        _copy(obj, b, 0, 0, obj.length);
        return b;
    }

    if (obj.length !== undefined || isAnyArrayBuffer(obj.buffer)) {
        if (typeof obj.length !== 'number') {
            return new FastBuffer();
        }
        return fromArrayLike(obj);
    }

    if (obj.type === 'Buffer' && ArrayIsArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
}

function _copy(source, target, targetStart, sourceStart, sourceEnd) {
    if (!isUint8Array(source))
        throw new ERR_INVALID_ARG_TYPE('source', ['Buffer', 'Uint8Array'], source);
    if (!isUint8Array(target))
        throw new ERR_INVALID_ARG_TYPE('target', ['Buffer', 'Uint8Array'], target);

    if (targetStart === undefined) {
        targetStart = 0;
    } else {
        targetStart = toInteger(targetStart, 0);
        if (targetStart < 0)
            throw new ERR_OUT_OF_RANGE('targetStart', '>= 0', targetStart);
    }

    if (sourceStart === undefined) {
        sourceStart = 0;
    } else {
        sourceStart = toInteger(sourceStart, 0);
        if (sourceStart < 0)
            throw new ERR_OUT_OF_RANGE('sourceStart', '>= 0', sourceStart);
    }

    if (sourceEnd === undefined) {
        sourceEnd = source.length;
    } else {
        sourceEnd = toInteger(sourceEnd, 0);
        if (sourceEnd < 0)
            throw new ERR_OUT_OF_RANGE('sourceEnd', '>= 0', sourceEnd);
    }

    if (targetStart >= target.length || sourceStart >= sourceEnd)
        return 0;

    if (sourceStart > source.length) {
        throw new ERR_OUT_OF_RANGE('sourceStart',
            `<= ${source.length}`,
            sourceStart);
    }

    if (sourceEnd - sourceStart > target.length - targetStart)
        sourceEnd = sourceStart + target.length - targetStart;

    let nb = sourceEnd - sourceStart;
    const targetLen = target.length - targetStart;
    const sourceLen = source.length - sourceStart;
    if (nb > targetLen)
        nb = targetLen;
    if (nb > sourceLen)
        nb = sourceLen;

    if (sourceStart !== 0 || sourceEnd !== source.length)
        source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);

    target.set(source, targetStart);

    return nb;
}

Buffer.prototype.copy =
    function copy(target, targetStart, sourceStart, sourceEnd) {
        return _copy(this, target, targetStart, sourceStart, sourceEnd);
    };