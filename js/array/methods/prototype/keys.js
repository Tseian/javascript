/*
keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
*/

var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();
console.log(iterator)
for (let key of iterator) {
    console.log(key); // expected output: 0 1 2
}
