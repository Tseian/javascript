/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。保证base和exponent不同时为0
 */
function Power(x, n) {
    // write code here
    if (x == 0 || x == 1) return x;
    if (n == 0) return 1;
    let res = 1;
    let nn = Math.abs(n);

    for (let i = nn; i != 0; i = parseInt(i / 2)) {
        if (i % 2 != 0) {
            console.log("hehh", x, i)
            res *= x;
        }
        x *= x;
    }
    return n > 0 ? res : 1 / res;
}
Power(3, 5)
module.exports = {
    Power: Power
};