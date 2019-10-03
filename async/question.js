console.log("script start");

async function async1() {
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2 end");
}
async1();

setTimeout(function () {
    console.log("setTimeout");
}, 0);

new Promise(resolve => {
    console.log("Promise");
    resolve();
})
    .then(function () {
        console.log("promise1");
    })
    .then(function () {
        console.log("promise2");
    });

console.log("script end");

/*
script start
async2 end
Promise
script end
promise1
promise2
async1 end
setTimeout

// 流程解释
正常输出script start
执行async1函数，此函数中又调用了async2函数，输出async2 end。回到async1函数，遇到了await，让出线程。
遇到setTimeout，扔到下一轮宏任务队列
遇到Promise对象，立即执行其函数，输出Promise。其后的resolve，被扔到了微任务队列
正常输出script end
此时，此次Event Loop宏任务都执行完了。来看下第二步被扔进来的微任务，因为async2函数是async关键词修饰，因此，将await async2后的代码扔到微任务队列中
执行第 4 步被扔到微任务队列的任务，输出promise1和promise2
执行第 6 步被扔到微任务队列的任务，输出async1 end
第一轮 EventLoop 完成，执行第二轮 EventLoop。执行setTimeout中的回调函数，输出setTimeout。
*/