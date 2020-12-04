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
var middleNode = function (head) {
    if (!head) return
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : fast.next
    }
    return slow
};

var middleNodeA = function (head) {
    if (!head) return
    let h = head;
    let n = 0;
    while (h) {
        h = h.next;
        n++;
    }
    n = Math.floor(n / 2)
    while (n) {
        head = head.next
        n++
    }
    return slow
};

var middleNodeB = function () {
    if (!head) return
    let h = head;
    let n = 0;
    let r = []
    while (h) {
        r.push(h)
        h = h.next;
        n++;
    }
    n = Math.floor(n / 2)
    return r[n]
}

const { list3 } = require("./sortedList")
console.log(JSON.stringify(middleNodeA(list3, 23)))