function _new(Fn, ...arg) {
    const obj = { __proto__: Fn.prototype };
    const obj1 = Fn.apply(obj, arg);
    console.log('obj1', obj1)
    return obj1 instanceof Object ? obj1 : obj;
}
let a = _new(function (a) {
    this.a = a
    return 2
}, 1)
console.log(a.a)