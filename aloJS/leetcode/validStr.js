/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let h = {};
    h["{"] = "}";
    h['('] = ')';
    h['{'] = '}';
    h['['] = ']';

    let r = [];

    for (let i = 0, len = s.length; i < len; i++) {
        if (i === 0) {
            r.push(s[i]);
        } else {
            //如果是相同则弹出  
            if (s[i] === h[r[r.length - 1]]) {
                r.pop();
            } else {
                r.push(s[i]);
            }
        }
    }
    return !r.length;
}