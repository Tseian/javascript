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
var oddEvenList = function (head) {
    let a = {};
    if (!head || !head.next) return head;
    let b = {};

    let n = 1;
    let be = b;
    let ae = a;
    while (head) {
        let tem = head;
        head = cut(head, 1);
        if (n % 2 == 0) {
            be.next = tem;
            be = be.next;
        } else {
            ae.next = tem;
            ae = ae.next;
        }
        n++;
    }
    ae.next = b.next;
    return a.next

};

function cut(head, n) {
    let p = head;
    while (--n && p) {
        p = p.next;
    }
    if (!p) return null;
    let next = p.next;
    p.next = null;
    return next;
}

function oddEvenList_(head) {
    if (!head || !head.next) return head;
    let a = head;
    let b = head.next;
    let be = b;
    while (be && be.next && a.next) {
        a.next = be.next;
        a = a.next;
        be.next = a.next
        be = be.next;
    }
    a.next = b;
    return head;
}

const { list3 } = require("./sortedList");
console.log("list3====", JSON.stringify(list3));
console.log(oddEvenList(list3))