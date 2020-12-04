/**
 * 迭代器模式是指提供一种方法顺序访问一个集合对象的各个元素，使用者不需要了解集合对象的底层实现。
 * 内部迭代
 */

function Iterrator(obj) {
    let current = 0;
    let next = function () {
        return current += 1;
    };
    let getCurrent = function () {
        return obj[current];
    };
    let rewind = function () {
        current = 0;
    };
    let hasNext = function () {
        return current < obj.length;
    };
    return { next, getCurrent, rewind, hasNext }
}

let iter = new Iterrator([1, 2, 4]);

while (iter.hasNext()) {
    console.log(iter.getCurrent());
    iter.next();
}