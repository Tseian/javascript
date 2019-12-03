/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    l1 = reverse(l1);
    l2 = reverse(l2);

    let l1h = l1;
    let jinwei = 0;
    let pre;
    while (l1 || l2) {

        if (!l1 && l2) {
            pre.next = l2;
            l1 = l2;
            l2 = null;
        }

        if (l1 && l2) {
            l1.val = l2.val + l1.val + jinwei;
        } else {
            l1.val = l1.val + jinwei;
        }

        if (l1.val >= 10) {
            l1.val -= 10;
            jinwei = 1;
        } else {
            jinwei = 0;
        }
        pre = l1;
        l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (jinwei) pre.next = { val: 1, next: null }
    // console.log(l1h)
    return reverse(l1h);
};

function reverse(head) {
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

const { list5, list4 } = require("./sortedList")
console.log(JSON.stringify(addTwoNumbers(list4, list5)))
