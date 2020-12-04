/**
 * 泛型
 */

function identity<T>(arg: T): T {
  return arg;
}
console.log(identity("str"));

function identity_<T>(arg: T): T {
  return arg;
}

let output = identity_<string>("hehehe");

console.log(output);
