/**
 * 单例模式
 * 单例模式定义：保证一个类仅有一个实例，并提供访问此实例的全局访问点。
 */
function Singleton() { };
Singleton.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
})();

Singleton.prototype.setName = function (name) { this.name = name; };
Singleton.prototype.getName = function () { return this.name; };

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

console.log(s1.getName(), s2.getName());