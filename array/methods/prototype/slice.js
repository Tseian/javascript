/*
slice() 方法返回一个新的数组对象，
这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
原始数组不会被改变。
*/

var animals = ['1', '2', '3', '4', '5'];

let a = animals.slice(0, 3)

console.log(a)
console.log(animals)

console.log(animals.slice(-2, 4))