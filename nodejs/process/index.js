// process 对象是一个全局变量
// 它也可以使用 require("process")
// eventEmitter 的实例
// const r = require("process");
// console.log(process == r);

// 'disconnect' 事件
// 如果使用 IPC 通道衍生 Node.js 进程（参阅子进程和集群文档），则在 IPC 通道关闭时将触发 'disconnect' 事件。


// 'message' 事件
// message <Object> | <boolean> | <number> | <string> | <null> 已解析的 JSON 对象或可序列化的原始值
// sendHandle <net.Server> | <net.Socket> 一个 net.Server 或 net.Socket 对象，或未定义。

// 'uncaughtException' 事件
// 当未捕获的 JavaScript 异常一直冒泡回到事件循环时，会触发 'uncaughtException' 事件
// 不应该在这个时间监听器中 尝试恢复应用 而是在进程退出之前 处理已经分配的资源，清除一些缓存，文件描述符等工作

// 'warning' 事件
// 任何时候 Node.js 触发进程告警，都会触发 'warning' 事件。

// 'unhandledRejection' 事件
// 如果在事件循环的一次轮询中，一个 Promise 被拒绝，并且此 Promise 没有绑定错误处理器， 'unhandledRejection 事件会被触发。


// 信号事件
// 当 Node.js 进程接收到一个信号时，会触发信号事件。

// process.abort() 方法会使 Node.js 进程立即结束，并生成一个核心文件。

// process.allowedNodeEnvironmentFlags  参数标志位


// process.arch 操作系统字符

// process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数

// process.channel 如果 Node.js 进程是由 IPC 通道（参阅子进程文档）方式创建的， 
// process.channel 属性保存 IPC 通道的引用。

// process.chdir(directory)
// 变更当前进程的工作目录
process.chdir("C:\\");
console.log(process.cwd());

// process.cpuUsage([previousValue])
// process.cpuUsage() 方法返回包含当前进程的用户 CPU 时间和系统 CPU 时间的对象。 

console.log(process.cpuUsage);
// console.log(process.config);

// process.cwd() 当前工作目录
console.log(process.cwd());


// process.debugPort 调试的端口

// process.emitWarning(warning[, options]) 触发warnnin事件

// process.env  属性返回包含用户环境的对象。

// process.execArgv 属性返回当 Node.js 进程被启动时，Node.js 特定的命令行选项。
console.log(process.execArgv);

// process.execPath
// 返回nodejs可执行文件的绝对路径

// process.exitCode
// 当进程正常退出，或通过 process.exit() 退出且未指定退出码时，此数值将作为进程的退出码。
process.exitCode = 100
console.log(process.exitCode);

// process.hrtime([time])
// process.hrtime.bigint()
// 返回当前的高精度实际时间（以纳秒为单位的 bigint 型）。


// console.log(process.getgroups());   

// process.kill(pid[, signal])
// process.kill() 方法将 signal 发送给 pid 标识的进程。

process.on('SIGHUP', () => {
    console.log('收到 SIGHUP 信号');
});

setTimeout(() => {
    console.log('退出中');
    process.exit(0);
}, 100000);

//在 Windows 平台中，如果 pid 用于杀死进程组，则会抛出错误
// process.kill(process.pid, 'SIGHUP');
console.log(process.pid)

// process.mainModule
// process.mainModule 属性提供了一种获取 require.main 的替代方式。
require("./mo.js")
console.log('process.mainModule==', process.mainModule)
// console.log('require.main===', require.main)

// process.memoryUsage()
// process.memoryUsage() 方法返回 Node.js 进程的内存使用情况的对象，该对象每个属性值的单位为字节。
console.log(process.memoryUsage());

// process.nextTick(callback[, ...args])
// process.nextTick() 方法将 callback 添加到下一个时间点的队列。
// 在 JavaScript 堆栈上的当前操作运行完成之后以及允许事件循环继续之前，此队列会被完全耗尽
console.log('开始');
process.nextTick(() => {
    console.log('下一个时间点的回调');
});
console.log('调度');
// process.platform 当前运行nodejs的操作系统
console.log(process.platform);

// process.ppid 父进程id
console.log('process.ppid 父进程id: ', process.ppid);


// process.resourceUsage()
// 返回当前进程的资源使用情况  V 12
// console.log(process.resourceUsage());

//process.send(message[, sendHandle[, options]][, callback])
// 如果 Node.js 进程是通过 IPC 通道衍生的，则 process.send() 方法可以用来给父进程发送消息。 接收到的消息被视为父进程的 ChildProcess 对象上的一个 'message' 事件。
// 如果 Node.js 进程不是通过 IPC 通道衍生的，则 process.send() 将会是 undefined。
// 消息传递时，以格式序列化和解析，结果消息与发送时未必完全一样。
console.log("非通过IPC通道衍生的进程 process.send 为： ", process.send);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    // 使用循环确保我们读取所有的可用数据。
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`数据: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('结束');
});

console.log("hello world");

// process.throwDeprecation
// 废弃警告标志

// process.title 属性返回当前进程标题（即返回 ps 的当前值）。 为 process.title 分配新值会修改 ps 的当前值。
console.log('process.title====', process.title);


const NS_PER_SEC = 1e9;
const time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
    const diff = process.hrtime(time);
    // [ 1, 552 ]

    console.log(`基准工具 ${diff[0] * NS_PER_SEC + diff[1]} 纳秒`);
    // 基准工具 1000000552 纳秒
}, 1000);








