// const h = require("./mo");
// console.log(require.resolve("./mo"))

//require(x) 从路径Y中加载x规则
/*
1.如果x是核心模块，直接返回核心模块
2.如果x开头是 / 那么 y设置为fs的root
3.如果x开头是 / or ./ ../ 那么 将被当做是 文件或者文件夹 require(y+x)
3.1.以文件的方式加载
 1.如果x是个文件，没有后缀，则直接加载 返回
 2.如果x.js是个文件，则直接加载，返回
 3、如果x.json是个文件，则直接加载，返回 同时parse一下转为一个object对象
 4、如果x.node是个文件，则当做是一个二进制的扩展加载 返回
3.2.以文件夹的方式加载
 1.如果x/packge.json存在则查找package.json中的main字段
 2.如果main字段不存在或者没有值则以3.3中写的方式加载 见3.3
 3.如果main字段存在且有合法值，则 将该字段值作为一个文件进行加载回到 3.1
 4.如果 第三步 没有找到则继续当做是文件往下找
 5.如果第四步没有找到则，则以3.3中写的方式加载 见3.3
 6.如果第五步没有找到 throw not found
3.3 加载文件夹下面的index文件
 1.如果index.js是个文件直接加载返回
 2.如果index.json是个文件直接加载返回
 3.如果index.node是个文件直接加载返回

4.如果x开头没有2、3中的请款也不是核心模块，那么会被当做是来自node_moduels的模块，
4.1首先会在当前目录父目录中的node_module查找 返回
4.2如果4.1没有找到则到在上一层的父目录的node_module中找，直到根目录的node_module
4.3如果没有找到则抛出错误
*/

let a = require("./test")
a()
// console.log(require.cache)
setInterval(() => {
    delete require.cache['D:\\projects\\study\\javascript\\nodejs\\module\\test\\lib\\some.js']
    require("./test")
}, 1000 * 2)

// 返回查询到的模块的位置
console.log('require.resolve====', require.resolve('./test'))
// 返回解析过程中解析过的所有路径
console.log('require.resolve.paths====', require.resolve.paths('ddd'))
