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
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let i = 0;
    let cur = head
    let next = cur.next;
    let res = {};
    while (cur) {

    }
    return head
};

const { list1 } = require("./sortedList")
console.log(JSON.stringify(swapPairs(list1)))