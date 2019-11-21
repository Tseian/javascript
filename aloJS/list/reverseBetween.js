/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (!head || !head.next) return head;
    let i = 1;
    let c = head;
    let pre;
    while (c) {
        if (i == m) {
            n = n - i + 1;
            let rp;
            while (n) {
                let tem = c.next;
                c.next = rp;
                rp = c;
                c = tem;
                n--;
            }

            if (pre) {
                pre.next = rp;
            } else {
                head = rp;
            }
            while (rp && rp.next) {
                rp = rp.next;
            }
            rp.next = c;
            break;
        } else {
            pre = c;
            c = c.next;
        }
        i++;
    }
    return head;
};

const { list3 } = require("./sortedList")
console.log(JSON.stringify(list3))
console.log(JSON.stringify(reverseBetween(list3, 1, 3)))