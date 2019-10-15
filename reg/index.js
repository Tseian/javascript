var regex1 = RegExp('foo*', 'gi');
var str1 = 'table football, foosball';
var array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//     console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
// }
console.log(regex1.dotAll)
console.log(regex1.flags)
console.log(regex1.global)
console.log(regex1.ignoreCase)
console.log(regex1.multiline)
console.log(regex1.source)
console.log(regex1.sticky)
console.log(regex1.unicode)
console.log(regex1.lastIndex)

console.log('---------------------')
console.log(regex1.exec(str1))

console.log(regex1.lastIndex)
console.log('---------------------')
console.log(regex1.exec(str1))

console.log(regex1.lastIndex)


console.log('---------------------')
console.log(regex1.exec(str1))

console.log(regex1.lastIndex)
console.log('---------------------')
console.log(regex1.exec(str1))
console.log(regex1.lastIndex)

console.log('---------------------')
var regex2 = RegExp('foo*', 'g');
var str2 = 'table football, foosball';
console.log('---------teste------------')
console.log(regex2.test(str2))
console.log(regex2.test(str2))
console.log(regex2.test(str2))
console.log(regex2.test(str2))

console.log("toString====", regex1.toString())

console.log('---------search------------')
var regex3 = RegExp('foo*', 'g');
var str3 = 'table football, foosball';
console.log(str3.search(regex3))
console.log(str3.search(regex3))
console.log(str3.search(regex3))
console.log('---------match------------')
console.log(str3.match(regex3))
console.log(str3.match(regex3))