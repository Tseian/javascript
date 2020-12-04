const Benchmark = require("benchmark");
const fs = require("fs");

// function foo() {
//   const arr = new Array(10000);

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//   }
// }

// const bench = new Benchmark(
//   "foo test", // 测试名
//   foo, // 测试内容
//   {
//     setup: `console.log('start')`, // 每个测试循环开始时调用
//     teardown: `console.log('over')`, // 每个测试循环结束时调用
//   }
// );
// bench.run(); // 开始测试

// console.log(bench.hz); // 每秒运行数
// console.log(bench.stats.moe); // 出错边界
// console.log(bench.stats.variance); // 样本方差

// basic usage (the `new` operator is optional)

const fn = () => {
  // console.log("hello world");
  "My name is ".concat(this.name); // "My name is foo"
  // console.log("rrrr");

  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 5000);
  });
};
// or using a name first

// or with options
const bench = new Benchmark("foo", fn, {
  // displayed by `Benchmark#toString` if `name` is not available
  id: "xyz",

  // // called when the benchmark starts running
  onStart: () => {
    console.log("start");
  },

  // // called after each run cycle
  // onCycle: onCycle,

  // // called when aborted
  // onAbort: onAbort,

  // // called when a test errors
  // onError: onError,

  // // called when reset
  // onReset: onReset,

  // // called when the benchmark completes running
  // onComplete: onComplete,

  // // compiled/called before the test loop
  // setup: setup,

  // // compiled/called after the test loop
  // teardown: teardown,
});
// TODO
console.log("ddd");
bench.run();
console.log(bench.hz); // 每秒运行数
console.log(bench.stats.moe); // 出错边界
console.log(bench.stats.variance); // 样本方差

// // or name and options
// const bench = new Benchmark("foo", {
//   // a flag to indicate the benchmark is deferred
//   defer: true,

//   // benchmark test function
//   fn: function (deferred) {
//     // call `Deferred#resolve` when the deferred test is finished
//     deferred.resolve();
//   },
// });

// // or options only
// const bench = new Benchmark({
//   // benchmark name
//   name: "foo",

//   // benchmark test as a string
//   fn: "[1,2,3,4].sort()",
// });

// // a test’s `this` binding is set to the benchmark instance
// const bench = new Benchmark("foo", function () {
//   "My name is ".concat(this.name); // "My name is foo"
// });
