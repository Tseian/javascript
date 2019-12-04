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
var plusOne = function (head) {
    if (!head) return head;

    head = reverseList(head);
    let h = head;
    let tem;
    let pre;
    while (h) {
        tem = h.val + 1;
        if (tem >= 10) {
            h.val = 0;
            pre = h;
            h = h.next;
        } else {
            h.val = tem;
            break;
        }
    }
    if (!h && pre) pre.next = { val: 1, next: null };
    return reverseList(head);
};

function reverseList(head) {
    if (!head || !head.next) return head;
    let pre;
    let cur = head;
    while (cur) {
        let tem = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tem;
    }
    return pre;
}

const { list5 } = require("./sortedList");
console.log("list5====", JSON.stringify(list5));
console.log(JSON.stringify(plusOne(list5)))