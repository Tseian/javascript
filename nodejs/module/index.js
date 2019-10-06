// buffer  Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。

const buf4 = Buffer.from('hello world', 'utf8');

console.log(buf4.toString('utf8'))

for (let b of buf4) {
    console.log(b)
}



const buf = Buffer.from([1, 2, 3]);

for (const b of buf) {
    console.log(b);
}

/*
Buffer.from(array) 返回一个新的 Buffer，其中包含提供的八位字节数组的副本。

Buffer.from(arrayBuffer[, byteOffset [, length]]) 返回一个新的 Buffer，它与给定的 ArrayBuffer 共享相同的已分配内存。

Buffer.from(buffer) 返回一个新的 Buffer，其中包含给定 Buffer 的内容的副本。

Buffer.from(string[, encoding]) 返回一个新的 Buffer，其中包含提供的字符串的副本。

Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的新建的的已初始化的 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 实例永远不会包含可能敏感的旧数据。 如果 size 不是数字，则将会抛出 TypeError。
*/


// Buffer.alloc(size[, fill[, encoding]])
// 分配一个大小为 size 字节的新 Buffer。 如果 fill 为 undefined，则用零填充 Buffer。
const buf2 = Buffer.alloc(5);
console.log(buf2);
// 打印: <Buffer 00 00 00 00 00>


// Buffer.allocUnsafe(size)
//以这种方式创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，可能包含敏感数据。
//使用fill进行填充

// Buffer.compare(buf1, buf2)
// 比较 buf1 与 buf2，主要用于 Buffer 实例数组的排序。

// Buffer.concat(list[, totalLength])
// 合并两个buffer 不提供totalLength会自动算

let totalBuffer = Buffer.concat([buf, buf2]);
console.log(totalBuffer.length)

// Buffer.from(array)
// 使用八位字节数组 array 分配一个新的 Buffer。
const buf3 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// Buffer.from(arrayBuffer[, byteOffset[, length]])
// 创建 ArrayBuffer 的视图，但不会拷贝底层内存。 例如，当传入 TypedArray 的 .buffer 属性的引用时，新建的 Buffer 会与 TypedArray 共享同一内存

// Buffer.from(buffer)
// 拷贝 buffer 的数据到新建的 Buffer 实例。


// Buffer.from(string[, encoding])
// 创建一个包含 string 的新 Buffer。 encoding 参数指定 string 的字符编码。

const buf5 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf5.toString());

// buf[index]

// 拷贝 ASCII 字符串到 `Buffer`，每次拷贝一个字节。

const str = 'http://nodejs.cn/';
const buf6 = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
    buf6[i] = str.charCodeAt(i);
}

console.log(buf6.toString('ascii'))
console.log(buf6.toJSON())

// buf.equals(otherBuffer) 
//如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。

// buf.includes(value[, byteOffset][, encoding])
/*
value <string> | <Buffer> | <Uint8Array> | <integer> 要查找的值。
byteOffset <integer> buf 中开始查找的偏移量。默认值: 0。
encoding <string> 如果 value 是字符串，则指定 value 的字符编码。默认值: 'utf8'。
返回: <boolean> 如果 buf 查找到 value，则返回 true，否则返回 false。
*/

// buf.indexOf(value[, byteOffset][, encoding])
// 字符串的位置

const b = Buffer.from('abcdef');
console.log(b.indexOf('b', {}));


// buf.toJSON()
// 返回 buf 的 JSON 格式。 

// buf.toString([encoding[, start[, end]]])

// buf.slice([start[, end]])