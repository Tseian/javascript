class Demo {
    constructor() {
        Demo.b = 100
    }
    a() {
        return '1F'
    };
    static b;
}

console.log(Demo.a())
console.log(Demo.b)