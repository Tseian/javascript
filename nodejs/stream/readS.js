// 可读流  可读流是对提供数据的来源的一种抽象。
// 所有可读流都实现了 stream.Readable 类定义的接口。

// 例子 
/*
   客户端的 HTTP 响应
   服务器的 HTTP 请求
   fs 的读取流
   zlib 流
   crypto 流
   TCP socket
   子进程 stdout 与 stderr
   process.stdin
*/
// 两种读取模式
// 1 流动模式（flowing）
// 在流动模式中，数据自动从底层系统读取，并通过 EventEmitter 
// 接口的事件尽可能快地被提供给应用程序。

// 2 暂停模式（paused）
// 在暂停模式中，必须显式调用 stream.read() 读取数据块。

/*
所有可读流都开始于暂停模式，可以通过以下方式切换到流动模式：
添加 'data' 事件句柄。
调用 stream.resume() 方法。
调用 stream.pipe() 方法将数据发送到可写流。
*/

/*
可读流可以通过以下方式切换回暂停模式：
如果没有管道目标，则调用 stream.pause()。
如果有管道目标，则移除所有管道目标。调用 stream.unpipe() 可以移除多个管道目标。
*/



// 三种状态
/*
可读流的两种模式是对发生在可读流中更加复杂的内部状态管理的一种简化的抽象。

在任意时刻，可读流会处于以下三种状态之一：

readable.readableFlowing === null  没有提供消费流数据的机制，所以流不会产生数据
readable.readableFlowing === false 调用 readable.pause()、 readable.unpipe()、或接收到背压，则 readable.readableFlowing 会被设为 false
等于false时候，数据可能会积压在流的内部缓冲中
readable.readableFlowing === true 监听 'data' 事件、调用 readable.pipe()、或调用 readable.resume() 都会使 readable.readableFlowing 切换到 true，可读流开始主动地产生数据并触发事件。
*/

// stream.Readable 类 
const fs = require("fs");

let rs = fs.createReadStream("read.txt", { encoding: 'utf-8' });
let ws = fs.createWriteStream("write.txt", { encoding: "utf-8" });
ws.on("pipe", function (src) {
    console.log("ws 接收了数据 来自rs");
});

// 'close' 事件
// 当流或其底层资源（比如文件描述符）被关闭时触发 'close' 事件。
// 当所有数据都读完后 触发close事件，底层关闭
rs.on("close", function () {
    console.log("rs closeing");
});
// 'data' 事件
// 将 'data' 事件监听器附加到尚未显式暂停的流将会使流切换为流动模式。 数据将会在可用时立即传递。
rs.on("data", function (chunk) {
    console.log("从文件中接收了数据", chunk);
});

rs.pipe(ws);

// 'end' 事件 
// 当流中没有数据可供消费时触发。

rs.on("end", function () {
    console.log("rs 没有数据可供消费了 触发end事件");
});

// 'error' 事件
// 'error' 事件可能随时由 Readable 实现触发。

// 'pause' 事件
// 当调用 stream.pause() 并且 readsFlowing 不为 false 时，就会触发 'pause' 事件。
rs.on("pause", function () {
    console.log("调用rs.pause() 触发pause事件");
});
// rs.pause()

// 'readable' 事件
// 当有数据可从流中读取时，就会触发 'readable' 事件。

// 'resume' 事件
// 当调用 stream.resume() 并且 readsFlowing 不为 true 时，将会触发 'resume' 事件。

// readable.pause() 
// readable.pause() 方法使流动模式的流停止触发 'data' 事件，并切换出流动模式。
const rs1 = fs.createReadStream(__filename, { encoding: 'utf-8', highWaterMark: 512 })
rs1.on('data', (chunk) => {
    console.log(`接收到 ${chunk.length} 字节的数据`);
    rs1.pause();
    console.log('暂停一秒');

    //暂停模式下面才能 读取到数据
    let data = rs1.read(100)
    console.log("read data===", data[0])

    setTimeout(() => {
        console.log('数据重新开始流动');
        rs1.resume();
    }, 1000);
})

// readable.pipe(destination[, options]) 
// readable.pipe() 方法绑定可写流到可读流，将可读流自动切换到流动模式，
// 并将可读流的所有数据推送到绑定的可写流。
// 数据流会被自动管理，所以即使可读流更快，目标可写流也不会超负荷。
// 默认情况下，当来源可读流触发 'end' 事件时，目标可写流也会调用 stream.end() 结束写入。
// 可想多个可写流 写入数据


// readable.resume()
// readable.resume() 方法将被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式。

// readable.unpipe([destination])
// readable.unpipe() 方法解绑之前使用 stream.pipe() 方法绑定的可写流。


// readable.unshift(chunk[, encoding])
// readable.unshift() 方法将数据块推回内部缓冲。 可用于以下情景：正被消费中的流需要将一些已经被拉出的数据重置为未消费状态，以便这些数据可以传给其他方。