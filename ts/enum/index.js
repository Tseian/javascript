var Enum;
(function (Enum) {
    Enum[Enum['A'] = 0] = 'A';
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
console.log(a, Enum);
var directions = [
    0 /* Up */ ,
    1 /* Down */ ,
    2 /* Left */ ,
    3 /* Right */ ,
];
console.log(directions);
var x;
// y's inferred type is { name: string; location: string; }
var y = {
    name: 'Alice',
    location: 'Seattle'
};
x = y;
console.log(x);