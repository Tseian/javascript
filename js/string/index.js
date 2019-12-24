let str1 = String(1234) //返回字符串
let str2 = new String(4567) // 返回字符串对象
console.log(str1)
console.log(str2)

console.log('1234\0h\"e\nllo\rhehe')

console.log('cat'.charAt(1));
console.log('cat'[1]);
console.log(str1.charCodeAt(1))

console.log('concat ', str1.concat(str2, '8910'))

console.log('includes ', str1.includes('1'))

console.log(str1.endsWith('4'))

console.log(str1.indexOf("4"))

console.log(str1.concat(str2).lastIndexOf('4'))

console.log('str1 match'.match(/t/g))


console.log('str1 normalize', 'str1'.normalize())

console.log('str1 padEnd ', str1.padEnd(10, '_'), 'end')

console.log('str1 repeat ', str1.repeat(10))


console.log('str1 replace ', 'strs1'.replace(/^s.{0,1}/, function ($1) {
    console.log('match ', $1)
    return $1
}))

console.log('str1 search', 'str1 s4earch'.search(/\d/g))

console.log('str1 slice', 'str1_slice'.slice(1, 5))


console.log('str1 split', 'str1 slice hehe'.split(' '))

console.log('str1 startsWith', 'str1 slice hehe'.startsWith('str'))

console.log('str1 substring', 'str1 slice hehe'.substring(0, 1))

console.log('str1 valueOf', str1.valueOf())

console.log('str1 trim首位两端', ' s tr1 '.trim())


console.log('str1 ABC toLocaleLowerCase()', 'ABC'.toLocaleLowerCase())

console.log('str1 ABC toLocaleUpperCase()', 'abc'.toLocaleUpperCase())

console.log('str1 ABC toLocaleUpperCase()', 'abc'.toString())
