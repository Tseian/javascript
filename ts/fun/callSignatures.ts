type DescribableFunction = {
  description: string;
  (something: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
function ta() {
  return true;
}
ta.description = "ddd";
doSomething(ta);

type SomeConstructor = {
  new (s: string): Date;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

function firstElement<T>(arr: T[]): T {
  return arr[0];
}
function firstElement1<T>(arr: T[]): T {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);

function map<E, O>(arr: E[], func: (arg: E) => O): O[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'number'
// 'parsed' is of type 'string[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
