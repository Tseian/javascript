let obj1 = { obj: 'obj', a: 1 };
let arr = [1, 2, 3]
let obj2 = { obj: "obj2", a: 2, arr }
Object.assign(obj1, obj2);
console.log(obj1);

// 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
let obj = Object.create({ c: 3, ...obj1 });

console.log('obj.__proto__====', obj.__proto__, 'obj===', obj);
obj = {}
obj = Object.defineProperty({}, 'hehe', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: "static"
});

console.log('after defineProperty', obj);


console.log(Object.entries(obj1))

let obj3 = { a: 2, b: 4 };

Object.freeze(obj3);
obj3.a = 4
console.log(obj3.a)

console.log('Object.getOwnPropertyDescriptor===',
    Object.getOwnPropertyDescriptor(obj3, 'a'));

console.log(Object.getOwnPropertyNames(obj3))

let prot = {}

console.log('getPrototypeOf 获取原型',
    Object.getPrototypeOf(Object.create(prot)) === prot);

//判断是否相等
console.log(Object.is(NaN, NaN), -0 == +0);


console.log(Object.isExtensible(obj3), Object.isExtensible(obj2))


let empty = {}
Object.seal(empty)
empty.a = 12
console.log(Object.isSealed(empty));
console.log(empty.a)


let haha = { a: 2, __proto__: { h: 1 } };

console.log(Object.keys(haha), haha.h)

console.log(Object.values(haha))

let ememe = { a: 2 }
Object.preventExtensions(ememe)
ememe.a = 12
ememe.b = 12
console.log("Object.preventExtensions()", ememe)