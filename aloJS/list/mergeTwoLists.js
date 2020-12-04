/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { list1, list2 } = require("./sortedList")
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return l2
    if (!l2) return l1
    if (!l1) return l2

    let res = {};
    let cr = res;

    while (l1) {
        while (l2 && l1.val >= l2.val) {
            cr.next = l2;
            l2 = l2.next;
            cr = cr.next
        }
        cr.next = l1;
        cr = cr.next;
        l1 = l1.next;
    }
    if (l2) cr.next = l2;
    return res.next;
};

console.log(JSON.stringify(mergeTwoLists(list2, list1)))