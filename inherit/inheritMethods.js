// 继承的方式

// 1 默认模式
// 原型属性 Man.prototype 指向一个对象，Person的实例对象，
// 那么Man的实例将可以访问Person实例this的属性已经Person.prototype的属性，
// 同时机继承了Man的属性和方法

// 缺点 子构造函数无法向父构造函数传递参数
function inherit(C, P) {
    C.prototype = new P();
}

function Person() {
    this.say = function () {
        console.log("hello person")
    }
}

Person.prototype.protoSay = function () {
    console.log("Person.prototype.protoSay Say")
}

function Man() {
    this.menSay = function () {
        console.log("men say hello");
    }
}

inherit(Man, Person);
let man = new Man();


// 2 借用构造函数
// 直接复制父对象this属性到子类中，不存在覆盖父对象属性的分享，blogPost.__proto__ 指向 Article.prototype 从而无法继承其属性
function Article() {
    this.tags = ['css', 'js'];
}
let article = new Article();
function BlogPost() {
    Article.apply(this);
    // apply-> thisArg,array
    // call -> thisArg,...array
}

let blogPost = new BlogPost();

console.log(blogPost.tags)
console.log(article.tags)
console.log(article.hasOwnProperty('tags'))
console.log(blogPost.hasOwnProperty('tags'))

// 3 借用和设置原型
// 先借用构造函数，然后设置子构造函数
// 缺点 调用了两次构造函数 name属性被继承了两次 Child的自身属性已有name
// 同时child.prototype指向Parant的实例也有name属性
function Parent(name) {
    this.name = name;
}
Parent.prototype.say = function () {
    console.log("HELLO", this.name);
}
function Child(name) {
    Parent.apply(this, arguments);
}
Child.prototype = new Parent();

let child = new Child('tse ian');
child.say()


// 4 共享原型 
// 所有对象共享了同一个原型
// child和parant两个对象都指向一个原型 Parant.prototype
// 缺点Child.prototype 被修改了属性，
// 那么parant.__proto__指向的原型(Parant.prototype)也会被改变 
function inheritTheSameProto(C, P) {
    C.prototype = P.prototype;
}

// 5 临时构造函数
// child.__proto__ -> F.prototype -> Paran.prototype 
// child.__proto__.constructor -> C
// child.uber -> P.prototype
const inheriTemCons = (function () {
    function F() { }
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        // new F().__proto__ -> F.prototype（P.prototype）
        C.prototype.constructor = C;
        C.uber = P.prototype
    }
}());

function Cc(name) {
    Pp.apply(this, arguments);
    this.name = name;
}
function Pp(ss) {
    this.ss = ss;
};

Pp.prototype.say = function () {
    console.log("hello name", this.name);
}

inheriTemCons(Cc, Pp);
let cc = new Cc('tse ian');
cc.say();
console.log("cc.ss====", cc.ss);
// 使用Object.create方法进行对象继承
let P = {
    name: "P",
    sayName: function () {
        console.log("hello ", this.name);
    }
}

let C = Object.create(P);
C.name = 'tse ian';
C.sayName();

