// set 元素不允许重复
const set = new Set([1, 2, 4])

for (let item of set) {
    console.log(item);
}

set.add(5).add(6);

console.log('after add');
for (let item of set) {
    console.log(item);
}

console.log('set.size', set.size)
console.log('set.keys', set.keys())
console.log('set.values', set.values())
console.log('set.entries', set.entries())