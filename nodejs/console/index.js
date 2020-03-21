// const fs = require("fs");
// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// // 自定义的简单记录器。
// const logger = new console.Console({
//     stdout: output,
//     stderr: errorOutput,
//     colorMode: true
// });
// // 像控制台一样使用它。
// const count = 5;
// logger.log('count: %d', count);
// // 在 stdout.log 中: count 5

// console.assert(false, '什么都不做');

console.log("helloworld");
console.count("hw");
console.count("hw");
console.count("hw");

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);