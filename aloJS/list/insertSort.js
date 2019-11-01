/**
 * 链表的插入排序
 */
const list = require("./index");

function insertSort(list) {
    if (!list || !list.next) return;
    let cur = list.next, pre;
    list.next = null;
    while (cur) {
        pre = cur;
        cur = cur.next;
        list = helper(list, pre);
    }
    return list;
}

function helper(list, node) {
    let pre;
    // 比第一个元素小，在链表前插入
    if (node.val < list.val) {
        node.next = list;
        list = node;
        return list
    }
    let cur = list;
    while (cur) {
        // 找到了插入位置
        if (node.val <= cur.val) break;
        pre = cur;
        cur = cur.next;
    }
    // 插入
    pre.next = node;
    node.next = cur
    return list
}

console.log("origin===", JSON.stringify(list));
console.log("after===", JSON.stringify(insertSort(list)));