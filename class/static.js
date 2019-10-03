// 类中静态方法
// 如果在方法前加上static那么该方法不会被子类继承
class Point {
    say() {
        console.log("hello world");
    }

    static innerStaticSay() {
        console.log("innerStaticSay")
    }
}

Point.staticSay = function () {
    console.log("static say")
}

class ColorPoint extends Point { }

let colorPoint = new ColorPoint()

// 无法调用
// colorPoint.innerStaticSay()
// colorPoint.staticSay()

// 目前es6只有静态方法 没有静态属性