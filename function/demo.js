// 与解构赋值结合使用
function t({ x = 1, y }) {
    console.log(x, y);
}
t({ y: 3 });