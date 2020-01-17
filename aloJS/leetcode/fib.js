
// fib(n) = fib(n-2) + fib(n-1);
function fib(n) {
    if (n <= 1) return n;
    if (n == 2) return 1
    let pre = 1;
    let cur = 0;
    let ppre = 1;
    for (let i = 3; i <= n; i++) {
        cur = pre + ppre;
        ppre = pre;
        pre = cur;
    }
    return cur;
}

console.log(fib(4));