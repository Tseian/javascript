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