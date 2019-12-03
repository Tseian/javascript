/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let res = {};
    let resH = res;

    let queue = [head];
    while (queue[0]) {
        let s = queue.pop();
        if (s) {
            resH.next = s;
            s.prev = resH;
            resH = resH.next;
            if (s.next) queue.push(s.next);
            if (s.child) queue.push(s.child);
        }
    }
    return res.next;
};