enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(a, Enum);

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
console.log(directions);

interface Named {
  name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;
console.log(x);
