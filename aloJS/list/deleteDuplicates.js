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
    if (!head || !head.next) return head
    let res = {};
    let c = head;
    while (c) {
        res[c.val] = res[c.val] || 0;
        res[c.val]++;
        c = c.next;
    }
    c = head;
    let pre = {};
    pre.next = head;
    let p = pre;
    while (c) {
        if (res[c.val] > 1) {
            p.next = c.next;
        } else {
            p = c;
        }
        c = c.next
    }
    return pre.next;
}
 
const { list1 } = require("./sortedList")
console.log(JSON.stringify(deleteDuplicates(list1)))