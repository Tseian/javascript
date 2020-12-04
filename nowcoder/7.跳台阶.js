/*
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
*/
function jumpFloor(number) {
    // write code here
    if (number == 0) return 0
    if (number == 1) return 1
    let cur = 2, pre = 1;
    for (let i = 3; i < number; i++) {
        let tem = cur;
        cur = pre + cur;
        pre = tem;
    }
    return cur;
}
module.exports = {
    jumpFloor: jumpFloor
};