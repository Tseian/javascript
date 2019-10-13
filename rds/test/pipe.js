/**
 * redis事务
 */
const redis = require("../src/utils/redis");

async function transaction() {
    await redis.watch('user', 'uv');
    let res = await redis.multi().set('user', 10).exec();
    redis.set('user', 11)
        .then((data) => { console.log('set user == 11', data) })
        .catch(err => { console.error(err) });
    console.log("res=====", res);
}

transaction().then((data) => {
    console.log("done");
})