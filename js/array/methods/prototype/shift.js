/*
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
*/
var array1 = [1, 2, 3];

// var firstElement = array1.shift();

var firstElement = Array.prototype.shift.apply(array1)
Array.prototype.shift.call(array1)

console.log(firstElement)
console.log(array1)