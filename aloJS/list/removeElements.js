/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;
    let res = {};
    let c = res;
    while (head) {
        if (head.val != val) {
            c.next = head;
            c = c.next;
        }
        head = head.next;
    }
    c.next = null;
    return res.next;
};

var removeElementsA = function (head, val) {
    if (!head) return head;
    head.next = removeElementsA(head.next, val);
    return head.val == val ? head.next : head;
}

const { list3 } = require("./sortedList")
console.log(JSON.stringify(removeElements(list3, 23)))