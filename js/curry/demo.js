function Currying(fn, ...args) {

    if (args.length >= fn.length) {
        return fn(...args)
    }

    return function (...args2) {
        return Currying(fn, ...args, ...args2)
    }
}
function add(x, y, z) {
    return x + y + z
}

let a = Currying(add, 10)(10)(10);
// let b = a(10);
// let c = b(10)
console.log(a == 30);
// console.log(b);
// console.log(c);