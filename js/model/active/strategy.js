/**
 * 策略模式定义：就是能够把一系列“可互换的”算法封装起来，并根据用户需求来选择其中一种。
 */
// 策略类
const strategies = {
    A() {
        console.log("This is stragegy A");
    },
    B() {
        console.log("This is stragegy B");
    }
};

// 环境类
const context = name => {
    return strategies[name]();
};

// 调用策略A
context("A");
// 调用策略B
context("B");