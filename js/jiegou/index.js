// 解构不成功，key的值都会等于undefined。
let { a } = { a: 1 };
console.log(a);

// 只要有iterator接口都可以采用数组形式进行解析
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log([x, y, z])