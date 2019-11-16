/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || !k) return head;

    let i = 0;
    let c = head;
    while (c) {
        c = c.next;
        i++;
    }
    if (k == i) return head;
    if (k >= i) k = k % i;
    if (!k) return head;
    k = i - k;

    let res = {};
    res.next = head;
    c = head;
    let pre;
    while (k) {
        pre = c;
        c = c.next;
        k--;
    }
    pre.next = null;
    res.next = c;
    while (c && c.next) {
        c = c.next
    }
    c.next = head
    return res.next;
};

var rotateRight_ = function (head, k) {
    if (!head || !head.next || !k) return head;

    let n = 1;
    let new_tail = head;
    let old_tail = head;
    for (n = 1; old_tail.next != null; n++)
        old_tail = old_tail.next;
    old_tail.next = head;

    new_tail.next = head;
    for (let i = 0; i < n - k % n - 1; i++)
        new_tail = new_tail.next;
    let new_head = new_tail.next;

    // break the ring
    new_tail.next = null;

    return new_head;

};



const { list6 } = require("./sortedList")
console.log(list6)
console.log(JSON.stringify(rotateRight_(list6, 1)))