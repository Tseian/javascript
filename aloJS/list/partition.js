/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head || !head.next) return head;
    let before = {};
    let beforeH = before;
    let after = {};
    let afterH = after;
    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    after.next = null;
    before.next = afterH.next;
    return beforeH.next;
};

var partition_ = function (head, x) {
    if (!head || !head.next) return head;
    let before = {};
    let beforeH = before;

    let pre;
    let c = head;
    while (c) {
        if (c.val < x) {
            before.next = c;
            before = before.next;
            if (!pre) {
                head = head.next;
            } else {
                pre.next = c.next;
            }
            c = c.next;
            continue;
        }
        pre = c;
        c = c.next;
    }
    before.next = head;
    return beforeH.next;
};



const { list3 } = require("./sortedList")
console.log(JSON.stringify(list3))
console.log(JSON.stringify(partition_(list3, 3)))