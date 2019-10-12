const net = require("net");
const path = require("path");
let pp = path.join('\\\\?\\pipe', process.cwd(), 'myctl');
console.log(pp);

let socket = new net.Socket();

function conn() {
    // callback connect事件监听器
    socket.connect({ path: pp }, function callback() {
        setInterval(() => {
            socket.write("hello world");
        }, 1000)
    });
}
conn();

socket.on("error", function (err) {
    console.error(err);
    setTimeout(() => {
        conn()
    }, 1000);
});

socket.on("data", function (data) {
    console.log('received msg: ', data.toString());
});

socket.on('connect', function () {
    console.log("connect sucess")
});

socket.on('drain', function () {
    console.log("数据都返送出去了 缓冲为空");
});
socket.setNoDelay(true);