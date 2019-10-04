/**
 * forOf
 * for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments
 * 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
 */
let arr = [1, 2, 3, 4, 5];

for (let el of arr) {
    console.log(el);
}