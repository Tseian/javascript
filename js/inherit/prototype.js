function doSomething() { }
console.log(doSomething.prototype);
// 和声明函数的方式无关，
// JavaScript 中的函数永远有一个默认原型属性。
var doSomething = function () { };
console.log(doSomething.prototype);