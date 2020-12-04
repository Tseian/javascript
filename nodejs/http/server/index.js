// const http = require('http');
// const net = require('net');
// const url = require('url');

// // 创建 HTTP 隧道代理。
// const proxy = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('响应内容');
// });
// proxy.on('connect', (req, cltSocket, head) => {
//     console.log()
// });

// // 代理正在运行。
// proxy.listen(1337, '127.0.0.1', () => { });


const http = require('http');
const options = {
    host: 'nodejs.cn',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(res.socket.on('data', (data) => {
        console.log(data.toString())
    }))
    // req.socket.on("data", (data) => {
    //     console.log(data.toString())
    // })
    console.log(`您的 IP 地址是 ${ip}，源端口是 ${port}`);
    // 使用响应对象。
});