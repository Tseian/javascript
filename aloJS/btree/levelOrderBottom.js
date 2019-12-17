/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];
    let r = [];
    let d = 0;
    return get(root, r, d)
};

var get = function (q, r, d) {
    if (!q) {
        return;
    } else {
        if (d + 1 > r.length) {
            r[d] = [];
        }
        r[d].push(q.val);
        if (q.left) get(q.left, r, d + 1)
        if (q.right) get(q.right, r, d + 1)
        return r.reverse();
    }
}