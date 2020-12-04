/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let r = parseInt(x / 2) + 1;
    let l = 0;
    let c = 0;
    while (l < r) {
        let mid = parseInt(l + (r - l + 1) / 2)
        c = mid * mid;
        if (c > x) {
            //中位数减一 逼近
            r = mid - 1;
        } else if (c === x) { return mid }
        else {
            l = mid;
        }
    }
    return l;
};
console.log(mySqrt(6))