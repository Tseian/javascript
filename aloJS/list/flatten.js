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
    let pre = null;
    let queue = [head];
    while (queue[0]) {
        let s = queue.pop();
        if (s) {
            s.prev = pre;
            if (pre) pre.next = s;
            pre = s;
            if (s.next) {
                queue.push(s.next);
            }
            if (s.child) {
                queue.push(s.child);
                s.child = null;
            }
            s.next = null;
        }
    }
    return head;
};

var flatten_ = function (head) {
    let cur = head;
    let pre = null;
    while (cur) {
        cur.prev = pre;
        if (pre) pre.next = cur;
        pre = cur;
        if (cur.child) {
            
            cur.next.prev = null;
            cur.next = null;

            let tem = cur;
            cur = cur.child;
            tem.child = null;
        } else {
            cur = cur.next;
        }
    }
    return head;
};