/**
 * redis 简单限流措施
 */
const redis = require("../src/utils/redis");

/**
 * ip+行为 作为唯一key进行计数，
 * 一旦达到最大值，则拒绝访问
 * @param {*} ip 
 * @param {行为} actionKey 
 * @param {窗口} period 
 * @param {最大访问量} maxC 
 */
async function isAllow(ip, actionKey, period, maxC) {
    let key = `hist:${ip}:${actionKey}`;
    let now = Date.now();
    let pip = redis.pipeline();
    pip.zadd(key, now, now);
    // 排除窗口之前的数据
    pip.zremrangebyscore(key, 0, now - period * 1000);
    // 统计当前用户的行为数据
    pip.zcard(key);
    // 清除冷用户数据
    pip.expire(key, period + 5);
    let res = await pip.exec();
    let cc = res[2][1];
    return cc <= maxC;
}


function rand() {
    for (let i = 0; i < 100; i++) {
        isAllow("127.0.0.1", "reply", 1, 10).then((data) => {
            if (data) console.log("可以访问了 ")
            else console.log("不可以访问了 ")
        })
    }
    setTimeout(rand, 5000 * Math.random())
}

rand();
