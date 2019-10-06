// 如果没有为 'error' 事件注册监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、并退出 Node.js 进程。
const MyEmitter = require("events");

const myEmitter = new MyEmitter();

// 如果不注册监听error事件 则进程会崩溃
myEmitter.on('error', function (e) {
    console.log(e);
});

myEmitter.emit('error', new Error('错误信息'));

console.log("崩溃了吗？没有！")