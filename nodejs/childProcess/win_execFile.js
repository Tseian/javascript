const { spawn, exec, fork, execFile } = require("child_process");

// 执行完才将stdout stderr 返回给回调函数
// 直接执行命令而不衍生shell， 
execFile('D:\\projects\\study\\javascript\\nodejs\\childProcess\\my.bat',   //第一个参数可以命令也可以是文件
    [""],
    {
        maxBuffer: 1024 * 1024, // stdout 最大输出
        // encoding: "unicode",
        // shell: '/usr/bin/bash' //如果为 true，则在 shell 中运行 command。 在 Unix 上使用 '/bin/sh'，在 Windows 上使用 process.env.ComSpec。
    }, (error, stdout, stderr) => {
        // 执行成功则，传给回调的 stdout 和 stderr 参数将会包含子进程的 stdout 和 stderr 输出
        if (error) {
            console.log(error);
        }
        console.log(stdout);
        console.log(stderr);
    });
console.log(process.env.ComSpec);



execFile('D:\\projects\\study\\javascript\\nodejs\\childProcess\\test.sh',   //第一个参数可以命令也可以是文件
    [""],
    {
        maxBuffer: 1024 * 1024, // stdout 最大输出
        shell: true
        // encoding: "unicode",
        // shell: '/usr/bin/bash' //如果为 true，则在 shell 中运行 command。 在 Unix 上使用 '/bin/sh'，在 Windows 上使用 process.env.ComSpec。
    }, (error, stdout, stderr) => {
        // 执行成功则，传给回调的 stdout 和 stderr 参数将会包含子进程的 stdout 和 stderr 输出
        if (error) {
            console.log(error);
        }
        console.log(stdout);
        console.log(stderr);
    });