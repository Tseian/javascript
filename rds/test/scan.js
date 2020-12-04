/**
 * scan 线程异步
 */
const redis = require("../src/utils/redis")
for (let i = 0; i < 1000; i++) {
    redis.del('user:' + i).then((data) => {
        console.log(data);
    });
}