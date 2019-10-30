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
var isSymmetric = function (root) {
    return compare(root, root)
};

var compare = function (q, p) {
    if (!q && !p) return true;
    if (!q || !p) return false;
    if (q.val !== p.val) return false
    return compare(q.right, p.left) && compare(p.right, q.left)
}