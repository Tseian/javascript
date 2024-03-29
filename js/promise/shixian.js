function myPromise(constructor) {
    let self = this;
    self.status = "pending" //定义状态改变前的初始状态
    self.value = undefined;//定义状态为resolved的时候的状态
    self.reason = undefined;//定义状态为rejected的时候的状态
    function resolve(value) {
        //两个==="pending"，保证了状态的改变是不可逆的
        if (self.status === "pending") {
            self.value = value;
            self.status = "resolved";
        }
    }
    function reject(reason) {
        //两个==="pending"，保证了状态的改变是不可逆的
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected";
        }
    }
    //捕获构造异常
    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    switch (self.status) {
        case "resolved":
            onFullfilled(self.value);
            break;
        case "rejected":
            onRejected(self.reason);
            break;
        default:
    }
}
// 测试代码
var p = new myPromise(function (resolve, reject) { resolve(1) });
p.then(function (x) { console.log(x) })
//输出1

var p1 = new myPromise(function (resolve, reject) { resolve(2) });
p1.then(function (x) { console.log(x) })

function myPromise(constructor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    function resolve(value) {
        if (self.status == 'pending') {
            self.status = 'resolved';
            self.value = value
        }
    }

    function reject(reason) {
        if (self.status == 'pending') {
            self.status = 'rejected';
            self.reason = reason
        }
    }

    try {
        constructor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

myPromise.prototype.then = function (resolve, reject) {
    let self = this;
    switch (self.status) {
        case 'resolved': {
            resolve(self.value)
            break;
        }
        case 'rejected': {
            reject(self.reason)
            break;
        }
    }
}