const memwatch = require('memwatch-next');
memwatch.on('leak', info => {
    reportLogFun(`[leak-${process.pid}]${JSON.stringify(info)}`)
})

memwatch.on('stats', stats => {
    reportLogFun(`[stats-${process.pid}]${JSON.stringify(stats)}`)
})

const md = new memwatch.HeapDiff();
// .... 业务逻辑代码
let a = [];
for (let i = 0; i < 100000; i++) {
    a.push([1, 2, 3, 4, 5, 6, 7])
}
const diff = md.end();
reportLogFun(JSON.stringify(diff));