const config = {
    development: {
        webApp: {
            port: 13306,
            jwtSecret: "63fa91d24054937fb4c7d56b8d0e602e",
            accessKey: "78ea11ed4d9cf17e6f888360b0c7cf0a",
            encryptKey: "6e3baab9f4a623826028d2def6b2e654"
        },
        redis: {
            password: "",
            host: "127.0.0.1",
            db: 13,
            port: 6379
        },
        socket: {
            port: 16908,
            host: "10.28.1.160"
        },
        sequelize: {
            host: '127.0.0.1',
            userName: 'modem_pool',
            password: 'modem_pool',
            port: 3306,
            dialect: 'mysql',
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            },
            database: "modem_pool"
        },
        sms: {
            account: "modem_pool",
            password: "072fb23173a9affb8e97ef4ab2cdd66c",
            apiKey: "7a4Nqp8niC4pJpzeEmWD",
            smsUri: "http://msgcenter100.com/api-source/index",
            toUser: "612099"
        }
    },
    test: {
        webApp: {
            port: 1915,
            jwtSecret: "3cdbe96160f7dc8020b6f31364b21a6d",
            accessKey: "9e93c8562fa871bf7444c4429fc9331f"
        },
        redis: {
            password: "",
            host: "10.37.4.104",
            db: 11,
            port: 6379
        },
        sequelize: {
            host: '10.37.4.104',
            userName: 'modemPool',
            password: 'modemPool',
            port: 3306,
            dialect: 'mysql',
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            },
            database: "modem_pool"
        }
    },
    production: {
        webApp: {
            port: 13306,
            jwtSecret: "1514dcec01022b6f43f3a8a4fadeba84",
            accessKey: "4ee33a69bf2751c0e22a87ccb5ae6374"
        },
        redis: {
            password: "838f815577fe40182dd6075e484940c1",
            host: "10.4.4.149",
            db: 13,
            port: 6379
        },
        sequelize: {
            host: '10.37.4.104',
            userName: 'modemPool',
            password: 'modemPool',
            port: 3306,
            dialect: 'mysql',
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            }
        }
    }
}

console.log("运行环境", process.env.NODE_ENV || "development")
console.log(config[process.env.NODE_ENV || "development"])
module.exports = config[process.env.NODE_ENV || "development"]