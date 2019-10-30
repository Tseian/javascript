/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    if (!root) return false;
    let q = [root];
    while (q[0]) {
        let s = q.pop();
        if (s) {
            if (root.val !== s.val) { return false }
            if (s.left) q.push(s.left);
            if (s.right) q.push(s.right);
        }
    }
    return true;
};