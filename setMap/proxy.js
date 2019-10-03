const handler = {
    // receiver 指向 proxy 实例
    get(target, property, receiver) {
        console.log(`GET: target is ${target}, property is ${property},receiver is ${receiver}`);
        return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
        console.log(`SET: target is ${target}, property is ${property}`);
        return Reflect.set(target, property, value);
    }
};

const obj = { a: 1, b: { c: 0, d: { e: -1 } } };
const newObj = new Proxy(obj, handler);

/**
 * 以下是测试代码
 */

// newObj.a; // output: GET...
// newObj.b.c; // output: GET...

newObj.a = 123; // output: SET...
// newObj.b.c = -1; // output: GET...