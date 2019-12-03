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

var cut = function (head, n) {
    let p = head;
    while (--n && p) {
        p = p.next;
    }
    if (!p) return null
    let next = p.next;
    p.next = null;
    return next;
}

var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let ji = head;
    let o = head.next;

    while (o) {
        ji.next = o.next;
        o.next = 

    }
};




const { list3, list1 } = require("./sortedList");

console.log(JSON.stringify(list3));
// console.log(JSON.stringify(list1));
console.log(JSON.stringify(oddEvenList(list3)));

