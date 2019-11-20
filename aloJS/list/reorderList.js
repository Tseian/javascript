/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var recuise = function (head) {
    let c = head;
    let pre;
    while (c) {
        let tem = c.next;
        c.next = pre;
        pre = c;
        c = tem;
    }
    return pre;
}
var reorderList = function (head) {
    if (!head && !head.next) return head;
    let c = head;
    while (c && c.next && c.next.next) {
        let tem = c.next;
        c.next = recuise(c.next);
        c = tem;
    }
    return head;
};

var reorderList_ = function (head) {
    if (!head && !head.next) return head;
    let fast = head;
    let slow = head;
};

const { list3 } = require("./sortedList");
console.log("list3", JSON.stringify(list3));
console.log("after----", JSON.stringify(reorderList_(list3)));