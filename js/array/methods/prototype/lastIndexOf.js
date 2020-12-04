/*
lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）
在数组中的最后一个的索引，如果不存在则返回 -1。
从数组的后面向前查找，从 fromIndex 处开始。
*/

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', NaN];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


console.log(animals.lastIndexOf(NaN));
// expected output: 1