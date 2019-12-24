let pr = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000 * 5)
    })
}

// async函数返回promise
async function runPr() {
    let a = await pr().catch(e => { console.log(e) });
    console.log(a)
    return 'haha';
}

runPr().then(e => { console.log(e) }).catch(e => console.log(e))
// async function test() {
//     console.log(await runPr())
// }
// test()