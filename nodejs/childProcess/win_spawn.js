const { spawn, exec, fork } = require("child_process");

// child_process.spawn() 方法使用给定的 command 衍生一个新进程，并带上 args 中的命令行参数。
const bat = spawn('cmd.exe', ['/c', 'my.bat'], {
    // cwd: "D:\\" 
    //detached <boolean> 准备子进程独立于其父进程运行。具体行为取决于平台，参阅 options.detached。
    //options.stdio  options.stdio 选项用于配置在父进程和子进程之间建立的管道
    //默认情况下，子进程的 stdin、 stdout 和 stderr 会被重定向到 ChildProcess 对象上相应的 subprocess.stdin、subprocess.stdout 和 subprocess.stderr 流。
    //当在父进程和子进程之间建立 IPC 通道，并且子进程是一个 Node.js 进程时，则子进程启动时不会指向 IPC 通道（使用 unref()），直到子进程为 'disconnect' 事件或 'message' 事件注册了事件处理函数。
});

bat.stdout.on('data', (data) => {
    console.log(data.toString('utf8'));
})

bat.stderr.on('data', (data) => {
    console.log(data);
})

bat.stderr.on('close', (code) => {
    console.log(`子进程退出，退出码 ${code}`);
})

bat.on("disconnect", (e) => {
    if (e) console.log(e);
    console.log("exec disconnect");
})

bat.on("message", (e) => {
    if (e) console.log(e);
    console.log("exec disconnect");
});

// bat.kill();

const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
    console.log('子进程：', m);
    setTimeout(() => {
        n.send("我是父进程")
    }, 1000)
});

// 使子进程打印: 子进程收到消息 { hello: 'world' }
// subprocess.send(message[, sendHandle[, options]][, callback])
// 共享server socket连接实例
n.send('我是父进程');