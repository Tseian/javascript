/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let l = a.length - b.length;
    if (l >= 0) {
        let str = "";
        while (l) {
            str += "0"
            l--;
        }
        b = str + b;
    } else {
        let ll = l * -1;
        let str = "";
        while (ll) {
            str += "0"
            ll--;
        }
        a = str + a;
    }
    let len = a.length - 1;
    let sum = ""
    let add = 0;
    while (len >= 0) {
        let c = parseInt(a[len]) + parseInt(b[len]);
        if (add) {
            c += add;
            add = 0;
        }
        if (c >= 2) {
            sum = c - 2 + sum;
            if (len === 0) {
                sum = "1" + sum;
            }
            add = 1;
        } else {
            sum = c + sum;
        }
        len--;
    }
    return sum;
};
console.log(addBinary("11", "1"))