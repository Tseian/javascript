/*
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
arr.push(element1, ..., elementN)
返回加入元素后的数组长度
*/

const animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('dog', 'monkey'))

console.log(animals)

const b = [1, 2, 4];

Array.prototype.push.apply(animals, b);

console.log(animals)