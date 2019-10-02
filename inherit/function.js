function f() { }

console.log(f.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ == Object.prototype)