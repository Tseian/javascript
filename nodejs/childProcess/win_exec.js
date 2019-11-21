const { spawn, exec, fork } = require("child_process");

// 执行完才将stdout stderr 返回给回调函数
// 没有option的情况先可以使用文件作文第一个command参数
// 衍生一个shell(cmd)并在shell中执行dir(windows)
exec('ls', {
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

var cp = require('child_process');

var child = cp.spawn('echo', ['你好', "钩子"]); // 执行命令
child.stdout.pipe(process.stdout);