// 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
// Node.js 创建的流都是运作在字符串和 Buffer（或 Uint8Array）上。
// 四种流类型

// 1. Writable fs.createWriteStream(path[, options]) 
// 所有可写流都实现了 stream.Writable 类定义的接口。

// 2.Readable fs.fs.createReadStream(path[, options])

// Duplex  可读可写流 net.Socket
// Transform 在读写过程中可以修改或转换数据的 Duplex 流

// 几乎所有的 Node.js 应用都在某种程度上使用了流。

//  可写流 是对数据要被写入的目的地的一种抽象。

/*
1 客户端的 HTTP 请求
2 服务器的 HTTP 响应
3 fs 的写入流
4 zlib 流
5 crypto 流
6 TCP socket 
7 子进程 stdin
8 process.stdout、process.stderr
*/

// stream.Writable 类 
const fs = require("fs")
let ws = fs.createWriteStream("file.txt");
// ws.write("hello world");

// close 事件  当流或其底层资源（比如文件描述符）被关闭时触发。
ws.on("close", function (e) { console.log("ws closed") });
// ws.close();


// 'drain' 事件 当一个write流无法处理输入的数据流时。write()返回false，
// 但是一旦wirite流可以处理输入流数据的的时候 触发drain事件
// 向可写流中写入数据一百万次。
// 留意背压（back-pressure）。 上游生产的数据速度大于下游可以处理数据的速度时候，wirte()会返回false
// 一旦下游处理完数据后，会触发drain事件，表示当前流对象可以处理数据了
function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 10000;
    write();
    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                // 最后一次写入。
                writer.write(data, encoding, callback);
            } else {
                // 检查是否可以继续写入。 
                // 不要传入回调，因为写入还没有结束。
                ok = writer.write(data, encoding);
                if (i == 2) console.log("2-ok", ok)
                if (i == 1) console.log("1-ok", ok)
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // 被提前中止。
            // 当触发 'drain' 事件时继续写入。
            writer.once('drain', write);
        }
    }
}

// writeOneMillionTimes(ws, "helloworld", "utf-8", function () {
//     console.log("after writeOneMillionTimes");
//     fs.truncateSync("file.txt");
// })

// error 事件
// 如果在写入或管道数据时发生错误，则会触发 'error' 事件。
// 除非在创建流时将 autoDestroy 选项设置为 true，否则在触发 'error' 事件时不会关闭流。

// 'finish' 事件
// 调用 stream.end() 且缓冲数据都已传给底层系统之后触发。
ws.on("finish", function (e) {
    console.log('finish emmit');
});

// pipe 事件 
// 当在可读流上调用 stream.pipe() 方法时会发出 'pipe' 事件，并将此可写流添加到其目标集。

let rs = fs.createReadStream("src.txt");
ws.on("pipe", function (src) {
    console.log('有数据正通过管道流入写入器');
    console.log(src == rs);
});
// 当全部数据写入完后触发 close
// rs.pipe(ws);

// 'unpipe' 事件
// 在可读流上调用 stream.unpipe() 方法时会发出 'unpipe'事件，从其目标集中移除此可写流。
ws.on("unpipe", function (src) {
    console.log('已移除可写流管道');
    console.log(src == rs);
});
// rs.pipe(ws);
// rs.unpipe(ws);

// writable.cork()
// writable.cork() 方法强制把所有写入的数据都缓冲到内存中。
// 当调用 stream.uncork() 或 stream.end() 时，缓冲的数据才会被输出。
// ws.cork();

// writable.end([chunk[, encoding]][, callback]) 
// callback 会当做是finish事件的监听器 end之后不再允许写入数据
ws.end("ws.end", "utf-8", function (e) {
    console.log("end emmit finish and close");
    console.log("ws.writable", ws.writable)
    console.log("ws.writableEnded", ws.writableEnded)
})

// writable.write(chunk[, encoding][, callback])
/*
chunk <string> | <Buffer> | <Uint8Array> | <any> 要写入的数据。  对于非对象模式的流， chunk 必须是字符串、 Buffer 或 Uint8Array。 对于对象模式的流， chunk 可以是任何 JavaScript 值，除了 null。
encoding <string> 如果 chunk 是字符串，则指定字符编码。
callback <Function> 当数据块被输出到目标后的回调函数。
返回: <boolean> 如果流需要等待 'drain' 事件触发才能继续写入更多数据，
则返回 false，否则返回 true。
*/