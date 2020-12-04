// // new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         reject('err');
// //     }, 2000);
// // }).then(res => {
// //     console.log(res);
// // }).catch(rea => {
// //     console.log("rea====", rea);
// // });
// // then方法有两个函数时候 reject时候支触发then函数传入的函数

// //all 要求全部执行
// //race 竞赛取最快执行的一个结果返回
// Promise.race([new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("pro1")
//         resolve("pro1")
//     }, 100)
// }), new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("pro2")
//         resolve("pro2")
//     }, 200)
// }), new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("pro3")
//         resolve("pro3")
//     }, 50)
// })]).then(res => { console.log("res===", res) }).catch(rea => { console.log("rea==", rea) })


// Promise.reject("reject test").then(() => { }, (rea) => { console.log("rea reject", rea) })

// let ps = [];

async function t(ctx, next) {
    ctx.a = 0;
    console.log(++ctx.a);
    await next();
}

async function t1(ctx, next) {
    console.log(++ctx.a);
    await next()
}
async function t2(ctx, next) {
    console.log(++ctx.a);
    await next()
}


function compose(middleware) {
    // return function (ctx, next) {
    //     return dispatch(0);
    //     function dispatch(i) {
    //         let fn = middlewares[i];
    //         console.log("fn====", fn)
    //         if (!fn) return Promise.resolve();
    //         try {
    //             return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
    //         } catch (error) {
    //             return Promise.reject(error)
    //         }
    //     }
    // }
    return function (context, next) {
        // last called middleware #
        let index = -1
        return dispatch(0)
        function dispatch(i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}

compose([t, t1, t2])({})
