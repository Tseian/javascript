/**
 * idle 观察者
 * setImmediate < setTimeout
 */



// setImmediate(() => {
//     console.log("setImmediate")
//     process.nextTick(() => {
//         console.log('process.nexTick c插入');
//     })
// });



// setImmediate(() => {
//     console.log("setImmediate2")
// });

setTimeout(() => {
    console.log("setTimeout")
    process.nextTick(() => {
        console.log('process.nexTick 插入');
    })
});
setTimeout(() => {
    console.log("setTimeout2")
});


