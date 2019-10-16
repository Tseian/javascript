function jiami(str) {
    return str.split('').map(s => {
        return String.fromCharCode(s.charCodeAt() + 1)
    }).join('')
}
function jiemi(str) {
    return str.split('').map(s => {
        return String.fromCharCode(s.charCodeAt() - 1)
    }).join('')
}
let a = jiami('abc');
console.log(jiemi(a));;