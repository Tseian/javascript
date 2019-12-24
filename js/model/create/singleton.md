## 单例模式

单例模式保证一个类仅有一个实例，并提供访问此实例的全局访问点。</p>
以下代码调用getInstance如果instance为空则将new Singleton()赋值给instance并返回instance</p>
如果instance不为空则直接返回instance

``` js
function Singleton() {};
//立即调用，同时使用闭包
Singleton.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
})();

Singleton.prototype.setName = function(name) {
    this.name = name;
};
Singleton.prototype.getName = function() {
    return this.name;
};

let s1 = Singleton.getInstance();
s1.setName("tse ian");
let s2 = Singleton.getInstance();

console.log(s1.getName(), s2.getName()); // tse ian tse ian
```

