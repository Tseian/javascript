/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;
    let fast = head.next;
    let slow = head;
    while (slow != fast) {
        if (!fast || !fast.next) return false
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

const { list3 } = require("./sortedList")
console.log(JSON.stringify(hasCycle(list3)));