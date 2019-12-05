/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
    let h = head;
    let n = 0;
    let i = 0;
    while (h) {
        if (findOne(G, h.val)) {
            if (i == 0) n++;
            i += 1;
        } else {
            i == 0;
        }
        h = h.next;
    }
    return n;
};

function findOne(arr, p) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (p == arr[i]) return true
    }
    return false;
}