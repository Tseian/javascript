const rq = require('request-promise')
const config = require('../config').config
const logger = require('./logger')

async function sendSms(message, title, to, channel) {
    // if (process.env.NODE_ENV !== 'production') return logger.debug('测试环境，不发送短信')

    let { account, password, apiKey, smsUri } = config.sms

    const options = {
        uri: smsUri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account,
            password,
            api_key: apiKey,
            data: [{ channel, to, title, content: message }]
        })
    }

    let success = true;
    try {
        let res = await rq(options);
        logger.debug(res);
    } catch (error) {
        logger.error('发送短信失败：', error.message);
        success = false;
    }
    return success;
}

async function sendSmsByVV(message, title, toUser) {
    logger.debug("发送消息：", message);
    return await sendSms(message, title, toUser, 'vv');
}

module.exports = { sendSms, sendSmsByVV }