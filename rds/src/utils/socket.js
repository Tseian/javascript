const net = require('net');
const logger = require("./logger");
const config = require("../config").config;
const iconv = require('iconv-lite');
const recvTags = require("../config/smsTags");

class Socket extends net.Socket {

    /**
     * 连接socket服务器
     */
    mackConnect() {
        this.connect(config.socket.port, config.socket.host);
    }

    constructor() {
        super();
        this.mackConnect();
    }

    /**
     * 设置一张卡上线
     * @param {手机号} phoNum 
     */
    putPhoNumOnline(phoNum) {
        if (!phoNum) {
            throw new Error("phoNum wrong");
        }
        let sms = `AP$SIMPHONUM=${phoNum}`;
        this.sendCommand(sms);
    }


    /**
     * 发送一条短信
     * @param {接收短信号码} phoNum str
     * @param {短信内容} content str
     * @param {端口号} portNum  Number
     */
    sendOneNewMsm(phoNum, content, portNum) {
        if (!phoNum || !content) {
            throw new Error(!phoNum ? "phoNum is null!" : "content is null!");
        }
        if (portNum != 0 && !portNum) {
            throw new Error("portNum wrong");
        }
        let sms = `{"taskname":"短信","tasktype":"短信","number":"${phoNum}","content":"${content}","count":1,"waittime":1}`;
        let smsLen = iconv.encode(sms, "gb2312").length;
        sms = `AP$TASK=${smsLen},${portNum},` + sms;
        this.sendCommand(sms);
    }

    /**
     * 发送指令到猫池
     * @param {*} data 
     * @param {*} tryNo 
     */
    sendCommand(data, tryNo = 0) {
        if (this.pending) {
            if (tryNo < 3) {
                setTimeout(() => {
                    this.sendCommand(data, ++tryNo);
                }, 1000);
            } else {
                logger.info("无法连接SOCKET服务器");
                return logger.info("发送指令", data);
            }
        }

        if (typeof data === "object") {
            data = JSON.stringify(data);
        }
        logger.info("发送指令", data);
        data = iconv.encode(data, "gb2312");
        this.write(data);
    }

    /**
     * 指定tag接收短信
     * @param {*} cb 
     * @param {*} tag 
     */
    receiveDataWithTag(cb, tag) {
        this.on('data', function (data) {
            data = iconv.decode(data, "gb2312");
            if (tag) {
                if (data.indexOf(tag) === 0) {
                    cb && cb(data);
                }
            } else {
                cb && cb(data);
            }
        });
    }

    /**
     * 接收新短信推送
     * @param {*} cb 
     */
    receiveNewSms(cb) {
        if (!cb || typeof cb != "function") {
            throw new Error("callback wrong");
        }
        this.receiveDataWithTag(cb, recvTags.NEW_SMS);
    }

    /***
     * 发送短信是失败
     */
    receiveSendSmsFail(cb) {
        if (!cb || typeof cb != "function") {
            throw new Error("callback wrong");
        }
        this.receiveDataWithTag(cb, recvTags.SMS_FAIL)
    }

    /**
     * 接收端口上报
     * @param {*} cb 
     */
    receiveDevice(cb) {
        if (!cb || typeof cb != "function") {
            throw new Error("callback wrong");
        }
        this.receiveDataWithTag(cb, recvTags.DEVICES)
    }

    /**
     * 指令执行失败 消息
     * @param {*} cb 
     */
    receiveTaskFail(cb) {
        if (!cb || typeof cb != "function") {
            throw new Error("callback wrong");
        }
        this.receiveDataWithTag(cb, recvTags.TASK);
    }
}

const socket = new Socket();

socket.on('close', function () {
    logger.info('Connection closed');
    logger.info('reconnecting...');

    setTimeout(() => {
        socket.mackConnect();
    }, 1000);
});

socket.on("error", (error) => {
    logger.error("socket error", error);
});

socket.on("connect", function () {
    logger.info("connected");
});

module.exports = socket;