/*
some() 方法测试数组中是不是有元素通过了被提供的函数测试。
它返回的是一个Boolean类型的值。
*/

var array = [1, 2, 3, 4, 5];

let a = array.some(e => {
    return e % 2 === 0
})

console.log(a, array);