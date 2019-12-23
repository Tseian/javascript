function helper() {
    // 返回条件
    // 处理代码
    // 下探下一个循环
    // 清理一些变量
}

function fabonacci(n) {
    // 返回条件
    if (n <= 0) return 1
    // 处理代码
    let res = n + fabonacci(n - 1);

    return res;
}