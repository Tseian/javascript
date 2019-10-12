/**
 * hyperLogLog
 * 提供不精确的去重方案 误差0.8%
 */
const redis = require("../src/utils/redis");


async function add() {
    for (let i = 0; i < 1000; i++) {
        await redis.pfadd('pffff', 'user' + i)
    }

    let count = await redis.pfcount('pffff')
    console.log(count);
    return count;
}

add().then(async (data) => {
    console.log(data, "data");
    let count = await redis.pfmerge("pffff");
    console.log(await redis.pfcount('pffff'))
})
