const net = require('net');
let socket = new net.Socket();
function conn() {
    socket.connect({
        port: 13379,
        host: "127.0.0.1",
    }, function () {
        console.log("connect succss");
        setTimeout(() => {
            if (!socket.destroyed) socket.write("你好 我是客户端");
        }, 1000);
    });
}

socket.on("data", function (data) {
    data = data.toString()
    console.log("server said ===", data);

    if (data == '你好 我是服务器') {
        setTimeout(() => {
            socket.write("哦 你好啊");
        }, 1000)
        return
    }

    if (data == '你叫什么啊？') {
        setTimeout(() => {
            socket.write("我叫擎天柱啊");
        }, 1000)
        return
    }

    if (data == "哦 你是擎天柱啊 你是干嘛的啊？") {
        setTimeout(() => {
            socket.write("我是挖煤的啊");
        }, 1000)
        return
    }
    if (data === '哦 挖煤的啊，你叫什么啊？') {
        setTimeout(() => {
            socket.write('我叫擎天柱啊')
        }, 1000)
        return
    }

});

socket.on("error", () => {
    setTimeout(() => {
        conn();
    }, 1000 * 3)
})
conn();