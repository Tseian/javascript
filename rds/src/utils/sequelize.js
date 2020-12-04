const config = require('../config').config;
const logger = require("./logger")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.sequelize.database,
    config.sequelize.userName,
    config.sequelize.password,
    {
        host: config.sequelize.host,
        dialect: config.sequelize.dialect,
        pool: {
            max: config.sequelize.pool.max,
            min: config.sequelize.pool.min,
            idle: config.sequelize.pool.idle
        },
        logging: function (log) {
            logger.info(log)
        }
    });
module.exports = sequelize;