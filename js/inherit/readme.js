// ### 对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）
// 指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) 
//，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，
// 并作为这个原型链中的最后一个环节。
// let obj = new Object();
// obj -> Object.prototype -> Object.prototype -> null

// 要检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，
// 则必须使用所有对象从 Object.prototype 继承的 hasOwnProperty 方法。

let obj = new Object();
console.log(Object.getPrototypeOf(obj) == Object.prototype);

function Obj() {
    // 对象私有函数 
    var say = function () {
        console.log("hello private Obj");
    }

    this.say = function () {
        console.log("hello public Obj");
    }

}

Obj.prototype.say = function () {
    console.log('hello proto');
}

let ob = new Obj();
console.log(ob);
ob.say()

console.log(" Obj.prototype", Obj.prototype.constructor)
console.log("Obj.prototype.__proto__", Obj.prototype.__proto__)
console.log("ob.__proto__.constructor", ob.__proto__.constructor)
console.log("ob.prototype", ob.prototype)