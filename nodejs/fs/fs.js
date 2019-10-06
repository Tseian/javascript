const fs = require("fs");
const assert = require('assert');
// 到达当前文件夹路径
// /Users/xieweicheng/Downloads/study/javascript/nodejs/fs
console.log(process.cwd())

const http = require("http");
const koa = require("koa");

// 1.文件路径
// 大多数 fs 操作接受的文件路径可以指定为字符串、Buffer、或使用 file: 协议的 URL 对象。
// 字符串形式的路径被解析为标识绝对或相对文件名的 UTF-8 字符序列。 相对路径将相对于 process.cwd() 指定的当前工作目录进行解析。

fs.open("fs.js", "r", (e, d) => {
    console.log('d', d);
    // 文件描述符
    fs.close(d, (er) => {
        console.log(er)
    })
})
// 2.URL对象的支持
// const fs = require('fs');
// const fileUrl = new URL('file:///tmp/hello');
// fs.readFileSync(fileUrl);

// 线程池的使用
// 所有的文件系统 API，除了 fs.FSWatcher() 和那些显式同步的之外，都使用 libuv 的线程池，这对某些应用程序可能会产生意外和负面的性能影响。