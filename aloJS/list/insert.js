/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    if (!head) {
        let res = { val: insertVal };
        res.next = res;
        return res;
    }
    if (head.next == head) {
        head.next = { val: insertVal, next: head };
        return head;
    }
    let h = head.next;
    let pre = head;
    let tail;
    while (h) {
        if (pre.val > h.val || h == head) {
            tail = pre.next;
            pre.next = null;
            break;
        }
        pre = h;
        h = h.next;
    }
    let p;
    let hd = tail;
    while (hd) {
        if (p && p.val <= insertVal && hd.val >= insertVal) {
            p.next = { val: insertVal, next: hd };
            break;
        } else {
            p = hd;
            hd = hd.next
        }
    }
    if (!hd) pre.next = { val: insertVal, next: tail };
    else pre.next = tail;
    return head;
};