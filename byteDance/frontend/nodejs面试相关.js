/**
 2019-09-16 头条面试 视频面试
1、chrild_process 父进程fork出来的子进程与父进程之间的字节流是怎么流向的？（不是问怎么使用API）

// 
2、消息队列的通信方式 （发布订阅、点对点方式point-to-point、request-response 等等...，回答上来之后估计要深入）

// sum(1)(2)(3).valueOf() sum函数的实现 (现场写代码，要求这个方法能支持无限个，柯里化，sum(1)(2)(3)(4)(5)(6)...)

// SSO 单点登录 （OAuth2授权）
// redis 集群
 */

//  2、sum函数 调用直接返回tem函数，其中tem函数必须保留对上一次调用时候的参数，如果调用tem函数则有调用sum函数，同时将前一次和档次的参数传入。
function sum() {
    let arg = arguments;
    function tem() {
        //继续返回tem函数
        return sum(...arg, ...arguments);
    }
    tem.valueOf = function () {
        let total = 0;
        [...arg].forEach(element => total += element);
        return total;
    }
    return tem;
}

console.log(sum(0)(1)(2).valueOf())
