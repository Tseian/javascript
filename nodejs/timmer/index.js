// const timers = require("timers");
// let immediate = setImmediate(() => {
//     console.log("hello world");
// }, 1000);
// immediate.unref();

// setTimeout(() => {
//     immediate.ref();
// }, 2000)


const settimeout = setTimeout(() => {
    console.log("hello setTimeout");
}, 1000)

settimeout.unref()
setTimeout(() => {
    // settimeout.refresh()
}, 5000)