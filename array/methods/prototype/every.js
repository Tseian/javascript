/**
 * every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔
 * callback 参数
 * element 当前元素
 * index 当前元素索引
 * array 当前数组
 * thisArg 执行callbak时候的this值
 */

const { arr: a } = require("./data");
let b = a.every((element, index, array) => {
    return element > 2
});

console.log(a)
console.log(b)