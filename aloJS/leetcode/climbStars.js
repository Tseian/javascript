/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let m = [];
    return climb_Stairs(0, n, m)
};

var climb_Stairs = function (i, n, m) {
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    if (m[i] > 0) {
        return m[i];
    }
    //递归一次 加一
    return m[i] = climb_Stairs(i + 1, n, m) + climb_Stairs(i + 2, n, m);
}

var f1 = function (n) {
    if (1 === n) return 1;
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
}

console.log(f1(50))