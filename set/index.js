let sets = new Set([1, 2, 3])

console.log(sets instanceof Set)
console.log(typeof sets)

console.log(parseInt('123.4hh'));
console.log(parseFloat('123.4hh'));

console.log(typeof undefined)
console.log(typeof null)

let a = { a: 2, __proto__: { c: 2 } }
let b = [1, 2]
console.log('a' in a)
console.log(0 in b)
console.log('c' in a)

console.log(1 || 0)
console.log(1 & 0)