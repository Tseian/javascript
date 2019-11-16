/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let c = head;
    let res = {};
    let t = res.next;
    let h = res;
    while (c) {
        if (c.val < x) {
            let tem = c.next;
            c.next = head;
            head = c;
            c = tem;
            console.log(c)
        } else {



        }
    }

    return head

};


const { list3 } = require("./sortedList")
console.log(list3)
console.log(partition(list3, 23))