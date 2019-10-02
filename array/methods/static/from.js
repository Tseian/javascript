/**
 * 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。
 */

let b = new Set([1, 2, 2, 3]);
let a = Array.from(b, c => c * 2)

console.log(a);
console.log(b);

function test() {
    console.log(arguments);
}
test(1)