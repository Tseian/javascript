/*
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
arr.find(callback[, thisArg])

callback
在数组每一项上执行的函数，接收 3 个参数：
element
当前遍历到的元素。
index可选
当前遍历到的索引。
array可选
数组本身。
thisArg可选
执行回调时用作this 的对象。

*/

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(e => e > 10);

console.log(found);