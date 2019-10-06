/*
DTRACE_NET_SERVER_CONNECTION
DTRACE_NET_STREAM_END
DTRACE_HTTP_SERVER_REQUEST
DTRACE_HTTP_SERVER_RESPONSE
DTRACE_HTTP_CLIENT_REQUEST
DTRACE_HTTP_CLIENT_RESPONSE
global
process
Buffer
clearImmediate
clearInterval
clearTimeout
setImmediate
setInterval
setTimeout
*/

//nodejs全局变量
// 1、__dirname  // 非全局变量  请参阅commonjs规范
// 2.__filename  // 非全局变量  请参阅commonjs规范
// 3.clearImmediate  
// 4.clearInterval
// 5.clearTimeout
// 6.console
// 7.exports // 非全局变量  请参阅commonjs规范
// 8.global

// 输出当前代码所在文件夹路径
// 当前模块所在的目录名
// /Users/xieweicheng/Downloads/study/javascript/global
console.log(__dirname);

//当前代码所在的文件路径包括文件名  绝对路径
// /Users/xieweicheng/Downloads/study/javascript/global/globalValue.js
console.log(__filename);

// module.exports 与 exports指向同一个内存地址，
// 如果代码直接将exports复制成另一个对象或数据则无法导出 例如exports = {a:2};
// 正确的方式应该是 module.exports.a={a:1}与exports.a ={a:1}想过相同

let imm = setImmediate(function () {
    console.log("不会执行");
});
// immediate 被清除了
clearImmediate(imm);

// 被清除了所以不会执行
let interval = setInterval(function () {
    console.log("不会执行");
}, 0);

clearInterval(interval);

let timeout = setTimeout(function () {
    console.log("不会执行");

}, 0);

clearTimeout(timeout);

// 6.console 简单的调试，将打印到stdout，stderr

// 7.exports  看上去像是全局变量但实际上不是，因为commonjs规范
// 扑灵 nodejs对js文件进行头尾包装 
// (function(exports,require,module,__filename,__dirname){/*真正的自己写的代码*/ */})

// 8.global 有global属性执行自己 global.global==global true

// 9.module 看上去像是全局变量但实际上不是，因为commonjs规范 

// 10.process 当前进程对象

// 11.queueMicrotask  v11.0.0版本
// () 方法将微任务排队以调用 callback。 
// 如果 callback 抛出异常，则将会触发 process 对象 的 'uncaughtException' 事件。
// 微任务队列由 V8 管理，可以与 process.nextTick() 队列（由 Node.js 管理）类似的方式使用。
// 始终在 Node.js 事件循环的每个回合中的微任务队列之前处理 process.nextTick() 队列。
queueMicrotask(function () {
    console.log(`queueMicrotask`)
});

// 11.require  看上去像是全局变量但实际上不是，因为commonjs规范
console.log(require.toString());

// 12.setImmediate 
let immediate1 = setImmediate(() => {
    console.log("setImmediate");
});
console.log('immediate1==', immediate1)
// 13.setInterval
let interval1 = setInterval(() => {
    console.log("setInterval");
}, 0);
console.log("interval1==", interval1);

// 14.setTimeout
let timeout1 = setTimeout(() => {
    console.log("setTimeout");
}, 0);

console.log("timeout1==", timeout1);

// 15.TextDecoder 
// 16.TextEncoder
// 17.URL  
// 18.URLSearchParams  提供对 URL 查询部分的读写权限
// 19.WebAssembly 
// 20.Buffer