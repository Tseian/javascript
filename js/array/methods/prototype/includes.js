/*
includes() 方法用来判断一个数组是否包含一个指定的值，
根据情况，如果包含则返回 true，否则返回false。
*/

var array1 = [1, 2, 3, NaN];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', NaN, 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes(NaN, -2));
// expected output: false