// AOP工厂
var aopFactory = function (before, after) {
    // 构造方法，在原方法前后增加执行方法
    function constructor(originFun) {
        function $_class(...data) {
            var result;
            proxy.before(data);
            result = originFun.apply(this, data);
            proxy.after(data);
            return result;
        }
        return $_class;
    }
    var proxy = {
        // 添加被代理方法，参数a为被代理方法，参数b为目标对象
        add: function (a, b) {
            var funName;
            // 判断参数a类型，可以为方法或方法名
            if (typeof a == "function") {
                funName = a.name;
            } else if (typeof a == "string") {
                funName = a;
            } else {
                return;
            }
            // 不传对象时默认为window对象
            b = b || global;
            if (typeof b == "object" && b[funName]) {
                // 用$_class替换原方法
                b[funName] = constructor(b[funName]);
            }
        },
        // 默认before为空方法
        before: function () { },
        // 默认after为空方法
        after: function () { }
    }
    // 注入特定的前后处理方法
    if (typeof before == "function") {
        proxy.before = before;
    }
    if (typeof after == "function") {
        proxy.after = after;
    }
    return proxy;
}


let checkProxy;
// 验证参数是否为数字
function checkNumber(...data) {
    var i, length;
    for (i = 0, length = data[0].length; i < length; i++) {
        if (typeof data[0][i] != "number")
            console.log(data[0][i] + "不是数字");
    }
}
// 将checkNumber方法作为前置通知，生成验证参数是否为数字的构造器
checkProxy = aopFactory(checkNumber);
// 加法
function Add(a, b) {
    return a + b;
}
// 减法
function Minus(a, b) {
    return a - b;
}

// 为加减法生成验证参数是否为数字的代理方法
checkProxy.add(Add);
checkProxy.add(Minus);