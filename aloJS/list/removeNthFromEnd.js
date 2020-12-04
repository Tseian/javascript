/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return head;
    let cur = head;
    let i = 0;
    while (cur) {
        i++;
        cur = cur.next;
    }
    if (n == i) return head.next;
    cur = head;
    let pre;
    i = i - n;
    while (i) {
        pre = cur;
        cur = cur.next;
        i--;
    }
    pre.next = cur.next;
    return head;
};

const { list4 } = require("./sortedList")
console.log(JSON.stringify(removeNthFromEnd(list4, 2)))