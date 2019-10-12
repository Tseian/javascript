const config = require("../config/config");
const Redis = require("ioredis");

const options = {
    password: config.redis.password,
    db: config.redis.db,
    port: config.redis.port,
    host: config.redis.host,
    keepAlive: 10000
}

const redis = new Redis(options);
redis.on('ready', async () => {
    console.log("redis connect is ready");
}).on("error", async (e) => {
    console.log('error', e);
});

module.exports = redis;