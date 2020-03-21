// 栈辅助
// 循环 遇到 "0" <= str && str <= "9" 记录为倍数  mutil
// 遇到 遇到字符 加入当前字符倍数前的res
// 遇到 遇到 str == "[" 将 当前 res 和 倍数压入栈
// 遇到 str == "]" pop一个，将出栈的str+当前res*出栈的倍数 得到一个新的字符串。
// 
var decodeString = function (s) {
    let res = "";
    let stack = [];
    let multi = 0;
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if (str == "[") {
            stack.push({ lastM: multi, lastR: res });
            res = "";
            multi = 0;
        } else if (str == "]") {
            let { lastM, lastR } = stack.pop();
            while (lastM--) {
                lastR += res;
            }
            res = lastR;
        } else if ("0" <= str && str <= "9") {
            multi = multi * 10 + parseInt(str);
        } else {
            res += str;
        }
    }
    return res;
};
