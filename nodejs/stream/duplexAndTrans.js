// 双工流与转换流
// 双工流（Duplex）是同时实现了 Readable 和 Writable 接口的流。

/*
Duplex 流的例子包括：

TCP socket
zlib 流
crypto 流
*/

// stream.Transform 类
// 转换流（Transform）是一种 Duplex 流，但它的输出与输入是相关联的。 
// 与 Duplex 流一样， Transform 流也同时实现了 Readable 和 Writable 接口。

const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// 使用 pipeline API 轻松地将一系列的流通过管道一起传送，并在管道完全地完成时获得通知。

// 使用 pipeline 可以有效地压缩一个可能很大的 tar 文件：

pipeline(
    fs.createReadStream('duplex.txt'),
    zlib.createGzip(),
    fs.createWriteStream('duplex.txt.tar.gz'),
    (err) => {
        if (err) {
            console.error('管道传送失败', err);
        } else {
            console.log('管道传送成功');
        }
    }
);