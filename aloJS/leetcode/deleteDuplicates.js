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
var deleteDuplicates = function (head) {
    if (!head) return head;
    if (!head.next) return head;
    let preHead = { val: head.val, next: null };
    let h = preHead;
    while (head) {
        while (head.next && h.val === head.next.val) {
            head = head.next
        }
        h.next = head
        h = h.next;
        head = head.next
    }
    return preHead;
};