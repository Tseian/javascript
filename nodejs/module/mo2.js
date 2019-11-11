
const mo = require("./mo")
module.exports = function () {
    console.log("hello mo2");
}
console.log(require.extensions[".js"].toString())
console.log(require.extensions[".json"].toString())
console.log(require.extensions[".node"].toString())
console.log("require.resolve====", require.resolve)
console.log("require.main====", require.main)
console.log("require.cache====", require.cache)

let os = process.binding("os");
let os2 = require("os")
// console.log(os.getCPUs())
console.log(os2.cpus())


let buffer = Buffer.from('100')
console.log('buffer.parent===', buffer.parent)