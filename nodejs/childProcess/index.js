// child_process 模块提供了衍生子进程的能力
// 默认情况下 stdin stdout stderr的管道会在父nodejs进程与衍生子进程之间建立
// 如果子进程写入 stdout 时超出该限制且没有捕获输出，则子进程将会阻塞并等待管道缓冲区接受更多的数据。
// 为方便起见， child_process 模块提供了 child_process.spawn() 和 child_process.spawnSync() 的一些同步和异步的替代方法。
// 这些替代方法中的每一个都是基于 child_process.spawn() 或 child_process.spawnSync() 实现的。


// childProcess类 继承自 EventEmitter ChildProcess 的实例代表衍生的子进程。

// 四种生成进程的方式

// 1.spawn
// 方法异步地衍生子进程，且不阻塞 Node.js 事件循环

// 2.exec
//  衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。

// 3.execFile
// 类似于 child_process.exec()，但是默认情况下它会直接衍生命令而不先衍生 shell。
// 但是在 Windows 上， .bat 和 .cmd 文件在没有终端的情况下不能自行执行，
// 因此无法使用 child_process.execFile() 启动。

// 4.fork
// 衍生一个新的 Node.js 进程，并调用一个指定的模块，该模块已建立了 IPC 通信通道，
// 允许在父进程与子进程之间发送消息。


// 事件

// close 事件  
// 当子进程的 stdio 流已被关闭时会触发 'close' 事件。

// disconnect事件
// 调用父进程中的 subprocess.disconnect() 或子进程中的 process.disconnect() 后会触发 'disconnect' 事件。
// error 事件

// exit 事件
// 当子进程结束后时会触发 'exit' 事件。