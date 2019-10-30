function strEncrypt(str) {
    return str.split('').map(s => {
        return String.fromCharCode(s.charCodeAt() * 2)
    }).join('')
}

function strDecrypt(str) {
    return str.split("").map(s => {
        return String.fromCharCode(s.charCodeAt() / 2)
    }).join("")
}

let ency = strEncrypt('你哈')
console.log(ency) // ifmmp!xpsme
console.log(strDecrypt(ency))