// 写一个方法把下划线命名转成大驼峰命名
function trans(str) {
    let first = str[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (i != 0) first = first + str[i]
    }
    return first
}
console.log(trans('abc'))