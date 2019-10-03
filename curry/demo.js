function Currying(fn, ...args) {

    if (args.length >= fn.length) {
        return fn(...args)
    }

    return function (...args2) {
        return Currying(fn, ...args, ...args2)
    }
}
function add(x, y) {
    return x + y
}

let a = Currying(add, 12);
console.log(a(10))