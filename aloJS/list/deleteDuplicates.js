/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head
    let cur = head.next;
    let pre = head;
    let res = pre;
    while (cur) {
        if (pre.val == cur.val) {
            cur = cur.next;
            pre.next = null;
            continue;
        }
        pre.next = cur;
        pre = pre.next;
        cur = cur.next;
    };
    return res;
}

const { list2 } = require("./sortedList")
console.log(JSON.stringify(deleteDuplicates(list2)))