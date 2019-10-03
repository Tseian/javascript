// 通过共享原型实现继承属性，所以当实例对象可以通过__proto__对原型进行修改
class Point {
    // 构造方法
    constructor() { }
    //重写 toString方法
    toString() { }

    getName() {
        return Point.name;
    }
}
Object.assign(Point.prototype, {
    toValue: function () { }
});

// constructor 构造方法 通过new命令生成对象实例时自动调用该方法，一个类必须有constructor方法，
// 如果没有显示定义，一个空的constructor方法会被默认添加，默认返回实例对象this
console.log(Point.prototype.constructor === Point) // true

// 类内部定义的所有方法都是不可枚举的
Object.keys(Point.prototype) // []

// name属性
console.log(Point.name); // Point
let point = new Point();
console.log(point.getName()); // Point

// 表达式形式定义
// Me可以在内部代码中使用
const MyClass = class Me {
    getClassName() {
        return Me.name
    }
    getClassName1() {
        return MyClass.name
    }
};
let mclass = new MyClass();
console.log(mclass.getClassName(), mclass.getClassName1()); // Me Me


// 类的继承 extends
// extends 后面的对象只要是有prototype属性的函数，都可以被继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        // 子类必须在方法constructor中调用super方法，否则新创就按实例时会报错，因为ES6是先创建父类的实例对象this，
        // 然后再用子类的构造函数对this进行修改，在构造方法中只有调用super之后才能使用this
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString();// 调用父类的toString方法
    }
}
// 构造函数继承
console.log(ColorPoint.__proto__ === Point);
// 方法的继承
console.log(ColorPoint.prototype.__proto__ === Point.prototype);

// 继承Object，Object是函数
class A extends Object { }
console.log(A.__proto__ === Object);
console.log(A.prototype.__proto__ === Object.prototype);

// 判断子类是否已经继承了父类
console.log(Object.getPrototypeOf(ColorPoint) === Point);

// super 关键字在子类中代表父类实例 对象总是继承其他对象，所以可以在任意一个对象中使用super关键字

