/**
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
使用 === 进行判断
*/

var beasts = [NaN, 'ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
// console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf(NaN));
// console.log(NaN === NaN)
// expected output: -1