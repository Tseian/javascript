/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const visitedNode = [];
var copyRandomList = function (head) {
    if (!head) return head;
    let len = visitedNode.length;
    for (let i = 0; i < len; i++) {
        if (visitedNode[i].key == head) {
            return visitedNode[i].value;
        }
    }
    let node = { val: head.val, next: null, random: null };
    visitedNode.push({ key: head, value: node });
    node.next = copyRandomList(head.next);
    node.random = copyRandomList(head.random);
    return node;
};