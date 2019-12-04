const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);


const buf3 = Buffer.allocUnsafe(10);
buf3.fill(0)
console.log(buf3);

const buf6 = Buffer.from('tést', 'latin1');

let buf7 = Buffer.from([1, 2, 3])
console.log(buf7)

for (const o of buf7) {
    console.log(o);
}

let buf8 = Buffer.alloc(100, 0)

let a = "aaaaa"
console.log(a.length);
console.log(Buffer.byteLength(a, "utf8"))

const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} 个字符, ` +
    `${Buffer.byteLength(str, 'utf8')} 个字节`);


let list = [buf1, buf2, buf3];
console.log(buf1.length, buf2.length, buf3.length);
let len = 0;
list.forEach(e => len += e.length);
console.log("len====", len);
console.log(Buffer.concat(list, len))

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer);

console.log(buf);

arr[1] = 6000;

console.log(buf);
console.log(arr);