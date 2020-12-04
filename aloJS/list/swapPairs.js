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

    let res = {};
    res.next = head;
    let temp = res;
    while (temp && temp.next && temp.next.next) {
        let start = temp.next;
        let end = temp.next.next;
        temp.next = end;
        start.next = end.next;
        end.next = start;
        temp = start;
    }
    return res.next
};

const { list1 } = require("./sortedList")
console.log(JSON.stringify(swapPairs(list1)))