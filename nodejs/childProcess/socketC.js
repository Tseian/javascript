const net = require('net');
let socket = net.connect({
    port: 1337,
    onread: {
        // 为套接字的每次读取复用 4KiB 的 Buffer。
        buffer: Buffer.alloc(4 * 1024),
        callback: function (nread, buf) {
            // 收到的数据在 `buf` 中可用，从 0 到 'nread`。
            console.log(buf.toString('utf8', 0, nread));
        }
    }
}, function (e, co) {
    co.send("hhh")
});

