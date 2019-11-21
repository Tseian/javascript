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
var detectCycle = function (head) {
    if (!head) return null;
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return head
        } else {
            set.add(head);
        }
        head = head.next;
    }
    return null;
};

var detectCycle_ = function (head) {
    if (!head) return head;
    let fast = head;
    let slow = head;
    let inter;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            inter = slow
            break;
        }
    }
    if (!inter) return null;
    while (inter != head) {
        inter = inter.next;
        head = head.next;
    }
    return inter;
};