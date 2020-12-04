/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle) return 0;
    if (needle === "") return 0;
    let nLen = needle.length;
    let hLen = haystack.length;
    if (nLen > hLen || nLen === 0) return -1;
    let i = 0;

    while (i <= hLen - nLen) {
        if (needle[0] === haystack[i]) {
            if (nLen === 1) return i;
            if (haystack[i + nLen - 1] === needle[nLen - 1]) {
                for (let j = 1; j <= nLen - 1; j++) {
                    if (haystack[i + j] !== needle[j]) {
                        break;
                    } else if (j === nLen - 1) {
                        return i;
                    }
                }
            } 
        }
        i++
    }
    return -1;
};
console.log(strStr("aaaaa", "bba"))