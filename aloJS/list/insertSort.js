const list = require("./index");

function insertSort(list) {
    if (!list || !list.next) return;
    let cur = list.next, pre;
    list.next = null;
    while (cur) {
        pre = cur;
        cur = cur.next;
        helper(list, pre);
    }
    return pre; 
}

function helper(list, node) {
    // console.log(JSON.stringify(node), "----", JSON.stringify(list))
    let pre;
    // 比第一个元素小，在链表前插入
    if (node.val < list.val) {
        list.next = null;
        node.next = list;
        list = node;
        // console.log("-----------", JSON.stringify(node), "----", JSON.stringify(list))
        return
    }
    let cur = list;
    while (cur) {
        // 找到了插入位置
        if (node.val <= cur.val) break;
        console.log("-----------", JSON.stringify(cur), "----", JSON.stringify(list))
        pre = cur;
        cur = cur.next;
    }
    // 插入
    node.next = pre.next;
    pre.next = node;
    return
}

console.log(JSON.stringify(list));
console.log(JSON.stringify(insertSort(list)));
console.log(JSON.stringify(list));
