/*
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
callback
针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
element
当前元素。
index
当前元素的索引。
array
调用findIndex的数组。
thisArg
可选。执行callback时作为this对象的值.
*/

var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
    return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
