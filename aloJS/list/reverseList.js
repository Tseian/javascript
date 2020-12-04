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
var reverseList = function (head) {
    if (!head) return head;
    let curr = head;
    let pre = null;
    while (curr) {
        let tem = curr.next;
        curr.next = pre;
        pre = curr
        curr = tem;
    }
    return pre;
};

const { list1 } = require("./sortedList")
console.log(JSON.stringify(reverseList(list1)))