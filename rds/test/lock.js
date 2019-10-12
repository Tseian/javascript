/**
 * 分布式锁
 * set 设置过期时间 
 * 如果枷锁失败需要处理
 * 1、抛出异常，稍后重试
 * 2、sleep一会后 重试
 * 3、将请求移至队列，之后异步处理
 */

// set lock:tseian true ex 5 nx
const redis = require("../src/utils/redis");
async function lock(key, expire) {
    let res = await redis.set(key, 'true', "ex", expire, 'nx');
    if (res) console.log("have locked");
    else console.log("fail lock")
}

lock("lock:tseian", 10).then((data) => {
    console.log(data);
    setInterval(async () => {
        let res = await redis.ttl('lock:tseian');
        console.log("res===", res);
        lock("lock:tseian", 100);
    }, 2000);
    // lock("lock:tseian", 100);
})