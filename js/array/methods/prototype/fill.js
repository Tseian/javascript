/**
  fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
  arr.fill(value[, start[, end]])
  
  value
 用来填充数组元素的值。
 start 可选
 起始索引，默认值为0。
 end 可选
 终止索引，默认值为 this.length。
 */
const { arr } = require("./data")

arr.fill(10, 1, 2);

console.log("arr", arr);