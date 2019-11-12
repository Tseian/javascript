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
    let sum = {};
    let cur = sum;

    let jinwei = 0;
    while (l1 || l2) {
        let sum = 0;
        if (l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        sum = sum + jinwei;
        if (sum > 10) {
            sum = sum - 10;
            jinwei = 1;
        } else {
            jinwei = 0;
        }
        cur.next = { val: sum }
        cur = cur.next;
    }

    if (jinwei) {
        cur.next = { val: 1, next: null }
    }

    return sum.next;
};

const { list5, list4 } = require("./sortedList")
console.log(JSON.stringify(addTwoNumbers(list4, list5)))