/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s === " " || s == "") return 0;
    if (s.length === 1) return 1;
    let p = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") p++
        if (s[i] === " " && p > 0) return p;
    }
    return p;
}; 
console.log(lengthOfLastWord("hello world "))