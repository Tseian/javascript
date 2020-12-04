const EventEmitter = require("events");
class AudioDevice extends EventEmitter {
    play(arg) {
        console.log("paly hello world");
    }
    stop(arg) {
        console.log("stop hello world");
    }
}

let emitter = new AudioDevice();

emitter.on('newListener', (event, listener) => {
    console.log("new listener", event);
});

console.log(emitter.on.toString())


emitter.on('removeListener', (event, listener) => {
    console.log("removeListener", event);
});

emitter.on("play", function (arg) {
    this.play();
});

emitter.addListener("con", function (arg) {
    console.log(arg)
})


// 不要使用箭头函数，箭头函数定义的监听函数 this会指向创建是的环境
emitter.on("stop", function (arg) {
    this.stop();
});

emitter.emit('play', 'hello world');
emitter.emit('con', 'con');

setTimeout(() => {
    emitter.emit('stop', 'stop');
}, 1000 * 3)


//  emitter.listenerCount() 统计当前某个事件注册有多少个 监听器

console.log("listenerCount===", emitter.listenerCount('play'));

// 默认情况下，每个事件可以注册最多 10 个监听器  
// 可以使用 emitter.setMaxListeners(n) 方法改变单个 EventEmitter 实例的限制。 
// 可以使用 EventEmitter.defaultMaxListeners 属性改变所有 EventEmitter 实例的默认值。

console.log('defaultMaxListeners====', EventEmitter.defaultMaxListeners)
emitter.setMaxListeners(100)
console.log('after setMaxListeners====', emitter.getMaxListeners())

//  emitter.eventNames() 返回已注册监听器的事件名数组。 数组中的值为字符串或 Symbol。

const myEE = new EventEmitter();
myEE.on('foo', () => { });
myEE.on('bar', () => { });

const sym = Symbol('symbol');
myEE.on(sym, () => { });

console.log(myEE.eventNames());

// emitter.getMaxListeners()  返回 EventEmitter 当前的监听器最大限制数的值，
// 该值可以使用 emitter.setMaxListeners(n) 设置或默认为 EventEmitter.defaultMaxListeners。

// emitter.listenerCount(eventName)  eventName <string> | <symbol> 正在监听的事件名。

// emitter.listeners(eventName)  返回名为 eventName 的事件的监听器数组的副本

console.log('emitter.listeners===', emitter.listeners('play'));

// emitter.off(eventName, listener)   emitter.removeListener() 的别名。


// emitter.prependListener(eventName, listener)#  添加 listener 函数到名为 eventName 的事件的监听器数组的开头。
emitter.prependListener('play', function (a) {
    console.log('prependListener')
});
emitter.emit("play");


// emitter.prependOnceListener(eventName, listener) 添加单次监听器 listener 到名为 eventName 的事件的监听器数组的开头。

// emitter.removeAllListeners([eventName])
// 移除全部监听器或指定的 eventName 事件的监听器。
emitter.removeAllListeners('play')
emitter.emit("on");

// emitter.removeListener(eventName, listener)
// 从名为 eventName 的事件的监听器数组中移除指定的 listener。 一次只能删除一个

// emitter.removeListener(eventName, listener)
// removeListener() 最多只会从监听器数组中移除一个监听器。 如果监听器被多次添加到指定 eventName 的监听器数组中，则必须多次调用 removeListener() 才能移除所有实例。