/**
 * 工厂模式
 * 就是把new对象的操作包裹一层，对外提供一个可以根据不同参数创建不同对象的函数
 */
// ---------------es6
class Dog {
    say() {
        console.log('wang wang');
    }
}

class Pig {
    say() {
        console.log('oh oh');
    }
}

class Animal {
    constructor(name) {
        if (name == 'dog') {
            return new Dog();
        }
        if (name == 'pig') {
            return new Pig();
        }
        throw TypeError("class name wrong");
    }
}

let pig = new Animal('pig');
let dog = new Animal('dog');

pig.say();
dog.say();

// ---------------es6

