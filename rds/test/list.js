/**
 * redis 异步队列
 * 如果队列为空 处理方式
 * 1、sleep 时间控制不好 可能会导致队列有大量的信息积压
 * 2、blpop brpop 阻塞方式，会造成当前程序其他操作redis的代码无法操作redis
 */
const redis = require("../src/utils/redis")
let timeout = 10
let times = 1;
async function execAsynQueue(key) {
    try {
        let res = await redis.lpop(key);
        if (res) {
            if (times > 0.01) {
                times = times / 5
            }
        } else {
            if (times < 100) {
                times = times * 2;
            }
        }
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("after secs: ", timeout * times);
        setTimeout(async () => {
            await execAsynQueue(key);
        }, timeout * times);
    }
}

execAsynQueue('list');