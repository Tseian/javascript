const net = require("net");
const server = net.createServer((socket) => {

    socket.on("data", (data) => {
        data = data.toString()
        console.log("client said ===", data);

        if (data === '你好 我是客户端') {
            return setTimeout(() => {
                console.log("server said ===", '你好 我是服务器');
                socket.write('你好 我是服务器');
            }, 1000);
        }

        if (data === '我是挖煤的啊') {
            setTimeout(() => {
                console.log("server said ===", "哦 挖煤的啊，你叫什么啊？");
                socket.write("哦 挖煤的啊，你叫什么啊？")
            }, 1000);
            return
        }
        if (data === '我叫擎天柱啊') {
            setTimeout(() => {
                console.log("server said ===", "哦 你是擎天柱啊 你是干嘛的啊？");
                socket.write("哦 你是擎天柱啊 你是干嘛的啊？")
            }, 1000)
            return
        }
        if (data == '哦 你好啊') {
            return setTimeout(() => {
                console.log("server said ===", "你叫什么啊？");
                socket.write("你叫什么啊？")
            }, 1000);
        }
    })
}).on('error', (err) => {
    // 处理错误
    throw err;
});

// 获取任意未使用的端口。
server.listen(13379, 'localhost', () => {
    console.log('打开服务器', server.address());
});