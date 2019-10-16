const err = new Error('错误信息');
console.error(err.message);
console.log(err.stack)

/*
ode.js 应用程序一般会遇到以下四类错误：

标准的 JavaScript 错误，例如 <EvalError>、<SyntaxError>、<RangeError>、<ReferenceError>、<TypeError> 或 <URIError>。
由底层操作系触发的系统错误，例如试图打开不存在的文件、或试图使用已关闭的 socket 发送数据。
由应用程序代码触发的用户自定义的错误。
AssertionError 错误，当 Node.js 检测到不应该发生的异常逻辑时触发。这类错误通常来自 assert 模块
*/