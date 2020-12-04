//https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&tqId=11163&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
// 第三种等于组合方式是前两种组合方式之和
function rectCover(number) {
    // write code here
    if (number == 0) return 0;
    if (number == 1) return 1;

    let ppre = 1;
    let pre = 2;
    for (let i = 3; i <= number; i++) {
        let cur = pre + ppre;
        ppre = pre;
        pre = cur;
    }
    return pre;
}
module.exports = {
    rectCover: rectCover
};