// path 模块提供用于处理文件路径和目录路径的实用工具。
const path = require('path');

console.log(path.basename("/foo/bar/baz/asdf/quux.html"));
//后缀
console.log(path.basename("/foo/bar/baz/asdf/quux.html", '.html'));

// path.delimiter
// 提供平台特定的路径定界符：
console.log(' path.delimiter==', path.delimiter)
// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// path.dirname() 方法返回 path 的目录路径
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'))

//  path.extname(path)  path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束。

console.log(path.extname('/foo/bar/baz/asdf/quux.html'))

// path.format(pathObject)  path.format() 方法从对象返回路径字符串。
let file = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});

console.log(file);

// path.isAbsolute(path) 判断是不是绝对路径


console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false


// path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
// path.join([...paths]) 
console.log(path.join('haha', 'nimei', '/dddd'))

// path.normalize(path)  path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// path.parse(path) 
// path.parse() 方法返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略，参阅 path.sep。

console.log(path.parse('/home/user/dir/file.txt'))

// path.relative(from, to) 返回from 到 to 的相对路径
// 如果 from 和 to 各自解析到相同的路径（分别调用 path.resolve() 之后），则返回零长度的字符串。
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))

// path.resolve([...paths])  path.resolve() 方法将路径或路径片段的序列解析为绝对路径。

console.log(path.resolve('/foo', '/bar', 'baz'))

// path.sep 提供平台特定的路径片段分隔符：
console.log('foo/bar/baz'.split(path.sep));
console.log(path.sep);

// path.posix  path.posix 属性提供对 path 方法的 POSIX 特定实现的访问。
// path.win32  path.win32 属性提供对特定于 Windows 的 path 方法的实现的访问。
