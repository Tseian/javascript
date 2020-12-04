/**
 * 
算法流程： 按顺序遍历字符串 s；
1、res[i] += c： 把每个字符 c 填入对应行 s_is i；
2、i += flag： 更新当前字符 c 对应的行索引；
3、flag = - flag： 在达到 Z 字形转折点时，执行反向。
 */
var convert = function (s, numRows) {
    if (numRows < 2) return s;
    let rows = new Array(numRows).fill("");
    let i = 0, flag = -1;
    for (let j = 0; j < s.length; j++) {
        rows[i] = rows[i] + s[j];
        if (i == 0 || i == numRows - 1) flag = -flag;
        i += flag;
    }
    let res = "";
    rows.forEach(e => res += e);
    return res;
};