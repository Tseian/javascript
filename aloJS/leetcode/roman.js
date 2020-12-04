/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let h = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let r = 0;
    for (let i = h.length - 1; i <= 0; i--) {
        if (i === 0) r += h[s[i]];
        let ci = h[s[i]];
        if (ci <= h[s[i - 1]]) {
            r += ci;
        } else {
            r -= ci;
        }
    }
};