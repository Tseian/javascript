// Map 类似对象，但是它的键（key）可以是任意数据类型

const map = new Map();

// 以任意对象为 Key 值
// 这里以 Date 对象为例
let key = new Date();
map.set(key, "today");

console.log(map.get(key));