/*
reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，
将其结果汇总为单个返回值。
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])


callback
执行数组中每个值的函数，包含四个参数：
accumulator
累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

currentValue
数组中正在处理的元素。
currentIndex可选
数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。
array可选
调用reduce()的数组

initialValue可选
作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，
则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
*/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
};
