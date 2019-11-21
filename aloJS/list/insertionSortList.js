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
var insertionSortList = function (head) {
    if (!head || !head.next) return head;

    let h = head;
    let p;
    while (h) {
        if (h == head) {
            p = h;
            h = h.next;
            continue;
        }

        let pre = head;
        let hh = head.next;
        let tem = h.next;
        while (hh !== h) {
            if (pre.val <= h.val && h.val <= hh.val) {
                p.next = h.next;
                h.next = hh;
                pre.next = h;
                break;
            }
            pre = hh;
            hh = hh.next;
        }
        if (hh != h) {
            h = tem;
        } else {
            p = h;
            h = h.next;
        }
        console.log(JSON.stringify())
    }
    return head;
};

const { list3 } = require("./sortedList");
console.log("list3", JSON.stringify(list3));
console.log("after----", JSON.stringify(insertionSortList(list3)));