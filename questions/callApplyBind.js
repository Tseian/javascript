// 实现一个call函数
function test(arg1, arg2) {
    console.log(arg1, arg2);
    console.log(this.a, this.b);
}

Function.prototype.call2 = function (thisArg, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    thisArg = thisArg || global;
    const { fn } = thisArg;
    // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
    thisArg.fn = this;
    const result = thisArg.fn(...args);

    delete thisArg.fn;
    if (fn) thisArg.fn = fn;

    return result;
}

test.call2(
    {
        a: "a",
        b: "b"
    },
    1,
    2
);

// 实现一个apply函数
Function.prototype.apply2 = function (thisArg, args) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    thisArg = thisArg || global;
    const { fn } = thisArg;
    // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
    thisArg.fn = this;
    const result = thisArg.fn(...args);

    delete thisArg.fn;
    if (fn) thisArg.fn = fn;

    return result;
}

test.apply2({ a: 'a', b: 'b' }, [1, 2]);

// 实现一个bind函数
// 返回绑定了this的函数
Function.prototype.bind2 = function (thisArg, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    const that = this;
    return function F() {
        if (this instanceof F) {
            return new that(...args);
        } else {
            return that.apply(thisArg, args);
        }
    }
}

let t = test.bind2({ a: 3, b: 4 }, 3, 4);
t();
