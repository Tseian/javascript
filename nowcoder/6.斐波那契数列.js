/*
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
*/

function Fibonacci(n) {
    // write code here
    let pre = 1, cur = 1;
    for (let i = 3; i <= n; i++) {
        let tem = cur;
        cur = pre + cur;
        pre = tem;
    }
    return cur;
}
module.exports = {
    Fibonacci: Fibonacci
};