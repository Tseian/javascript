const { spawn, exec, fork } = require("child_process");

// child_process.fork() 方法是 child_process.spawn() 的一个特例，专门用于衍生新的 Node.js 进程
//  与 child_process.spawn() 一样返回 ChildProcess 对象。 返回的 ChildProcess 将会内置一个额外的通信通道，允许消息在父进程和子进程之间来回传递。 详见 subprocess.send()。
fork('dir', {
    cwd: 'D:\\',
    maxBuffer: 1024 * 1024, // stdout 最大输出
    // encoding: "unicode",
    // shell: '/usr/bin/bash' //衍生shell的程序文件 windows cmd
}, (error, stdout, stderr) => {
    // 执行成功则，传给回调的 stdout 和 stderr 参数将会包含子进程的 stdout 和 stderr 输出
    if (error) {
        console.log(error);
    }
    console.log(stdout)
    console.log(stderr)
});