/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var findMiddleNode = function (head) {
    if (!head) return head;
    let pre = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        pre = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    if (pre) pre.next = null;
    return slow;
}
var sortedListToBST = function (head) {
    if (!head) return head;
    let mid = findMiddleNode(head);
    let node = { val: mid.val, left: null, right: null };
    if (head == mid) {
        return node;
    }
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(mid.next);
    return node;
};


const { list6 } = require("./sortedList");
console.log(JSON.stringify(list6));
console.log(JSON.stringify(sortedListToBST(list6)));