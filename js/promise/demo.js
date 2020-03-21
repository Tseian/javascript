let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('hello')
    }, 1000 * 2)
});

promise.then(function (value) {
    console.log(value);
}).catch(error => {
    console.log(error);
})


console.log('script start')
let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end')
}).then(function () {
    console.log('promise2')
})
setTimeout(function () {
    console.log('settimeout')
})
console.log('script end')