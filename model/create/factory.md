## 工厂模式
工厂模式把new对象的操作包裹一层，对外提供一个可以根据不同参数创建不同对象的函数<p>
以下代码会根据创建Animal实例时传入的参数返回不同的类实例

#### es6 实现方式

``` js
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

pig.say(); //oh oh
dog.say(); //wang wang
```

#### es5 实现方式

``` js
function Man() {}

function Women() {}
Man.prototype.say = function() {
    console.log('i am a MAN');
};
Women.prototype.say = function() {
    console.log('i am a WOMEN');
};

function Person(gender) {
    if (gender == 'man') {
        return new Man();
    }
    if (gender == 'women') {
        return new Women();
    }
    throw TypeError('type error');
}

var man = new Person('man');
var women = new Person('women');

man.say(); // i am a MAN
women.say(); // i am a WOMEN
```

