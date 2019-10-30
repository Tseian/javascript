/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let res = [];
    let j = 0;
    let o = 1;
    A.forEach(e => {
        if (e % 2 === 0) {
            res[o] = e;
            o = o + 2;
        } else if (e % 2 === 1) {
            res[j] = e;
            j = j + 2;
        }
    });
    return res
}

var sortArrayByParityII = function (A) {

}