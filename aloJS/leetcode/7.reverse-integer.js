/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x == 0) return 0;
    let abx = Math.abs(x).toString();
    let res = 0;
    for (let i = abx.length - 1; i >= 0; i--) {
        let c = parseInt(abx[i]);
        if (c !== 0) res = res + c * 10 ** i;
    }
    if (x < 0) res *= -1;
    if (res <= (-2) ** 31 || res >= 2 ** 31 - 1) return 0;
    return res;
};
console.log(reverse(90000))