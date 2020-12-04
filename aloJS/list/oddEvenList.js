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
<<<<<<< HEAD
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
=======

var cut = function (head, n) {
>>>>>>> 1b77eb7691b8a17af7b09adf393a241b65e08e89
    let p = head;
    while (--n && p) {
        p = p.next;
    }
<<<<<<< HEAD
    if (!p) return null;
=======
    if (!p) return null
>>>>>>> 1b77eb7691b8a17af7b09adf393a241b65e08e89
    let next = p.next;
    p.next = null;
    return next;
}

<<<<<<< HEAD
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
=======
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

>>>>>>> 1b77eb7691b8a17af7b09adf393a241b65e08e89
