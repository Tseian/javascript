const list = require("./index");

function iter(list) {
    let arr = [];
    while (list.next) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

console.log(iter(list));