/*
toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString
方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

arr.toLocaleString([locales[,options]]);

locales 可选
带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。
options 可选
一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，
对于日期Date.prototype.toLocaleString().

*/

var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', { timeZone: "UTC" });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
