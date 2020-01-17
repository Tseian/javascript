/**
 * 延时队列
 * 多线程争抢任务
 * zrem 删除 zset
 * zrangebysocre 
 */

const redis = require("../src/utils/redis")
const sleep = function (time) {
    return new Promise((resolve) => {
        return setTimeout(resolve, time);
    })
}
let timeout = 1000
let times = 1;
async function delay(value = 'helloworld') {
    let retryTs = parseInt(Date.now() / 1000 + 5);
    await redis.zadd('delay_queue', retryTs, value);
    return 'success';
}

async function execAsynQueue(key) {
    try {
        let res = await redis.zrangebyscore('delay_queue', 0, Date.now());
        console.log(res, "res=====")
        if (res.length == 0) {
            sleep(1000)
        } else {

            let v = res[0];
            let success = redis.zrem('delay_queue', v);
            if (success) {
                // 
                console.log("success", v);
                return "success"
            }
        }
    } catch (error) {
        console.error("err====", error.message);
    } finally {
        console.log("after secs: ", timeout * times);
        setTimeout(async () => {
            await execAsynQueue(key);
            delay().then((data) => {
                console.log("data====", data);
            })
        }, timeout * times);
    }
}

execAsynQueue().then((data) => {
    console.log(data);
});
