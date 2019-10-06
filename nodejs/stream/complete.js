// 流的开发者可以声明一个新的 JavaScript 类并继承四个基本流类中之一（stream.Writeable、
// stream.Readable、 stream.Duplex 或 stream.Transform），
// 且确保调用了对应的父类构造器:
// 自定义的 Writable 流必须调用 new stream.Writable([options]) 构造函数并实现 writable._write() 和/或 writable._writev() 方法。
const { Writable } = require('stream');

class MyWritable extends Writable {
    constructor(options) {
        super(options);
        // ...
    }
}

// 简单实现
const myWritable = new Writable({
    write(chunk, encoding, callback) {
        // ...
    },
    writev(chunks, callback) {
        // ...
    }
});


const { StringDecoder } = require('string_decoder');

class StringWritable extends Writable {
    constructor(options) {
        super(options);
        this._decoder = new StringDecoder(options && options.defaultEncoding);
        this.data = '';
    }
    _write(chunk, encoding, callback) {
        if (encoding === 'buffer') {
            chunk = this._decoder.write(chunk);
        }
        this.data += chunk;
        callback();
    }
    _final(callback) {
        this.data += this._decoder.end();
        callback();
    }
}

const euro = [[0xE2, 0x82], [0xAC]].map(Buffer.from);
const w = new StringWritable();

w.write('货币: ');
w.write(euro[0]);
w.end(euro[1]);

console.log(w.data); // 货币: €



const { Transform } = require('stream');

// 转换流也是双工流。
const myTransform = new Transform({
    writableObjectMode: true,

    transform(chunk, encoding, callback) {
        // 强制把 chunk 转换成数值。
        chunk |= 0;

        // 将 chunk 转换成十六进制。
        const data = chunk.toString(16);

        // 推送数据到可读队列。
        callback(null, '0'.repeat(data.length % 2) + data);
    }
});

myTransform.setEncoding('ascii');
myTransform.on('data', (chunk) => {
    console.log("可读流 接收到的数据： ", chunk);

});

myTransform.write(1);
// 打印: 01
myTransform.write(10);
// 打印: 0a
myTransform.write(100);
// 打印: 64

