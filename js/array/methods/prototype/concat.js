/**
 *  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 *  var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
 */
var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = ["g", "h", "i"];
let array4 = array1.concat(array2, array3);

console.log("array1", array1);
console.log("array2", array2);
console.log("array3", array3);
console.log("array4", array4);
