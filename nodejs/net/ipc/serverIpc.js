const net = require("net");
const path = require("path");
// connection 事件  创建的server是ipc还是tcp取决于server.listen监听的参数
const server = net.createServer((connection) => {

    connection.on('end', function () {
        console.log('客户端已断开连接');
    });

    connection.on('data', function (data) {
        console.log('received client data===', data.toString());
        connection.write("hello nimeide");
    });

});
let pp = path.join('\\\\?\\pipe', process.cwd(), 'myctl')
console.log(pp);
// 触发listening事件

server.listen(pp, function () {
    console.log("会触发 'listening' 事件。");
});

server.on('listening', function () {
    console.log("listen 方法出发后 listening 事件");
});

server.on("error", function (error) {
    console.error("error===", error.message);
});

server.on("close", function () {
    console.error("close===");
});