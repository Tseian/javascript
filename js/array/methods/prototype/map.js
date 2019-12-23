/*
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

callback
生成新数组元素的函数，使用三个参数：
currentValue
callback 数组中正在处理的当前元素。
index可选
callback 数组中正在处理的当前元素的索引。
array可选
callback  map 方法被调用的数组。
thisArg可选
执行 callback 函数时使用的this 值。
*/

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(function (x) {
    console.log(this.a)
    return x * 2;
}, { a: 2 });

console.log(map1);
// expected output: Array [2, 8, 18, 32]
