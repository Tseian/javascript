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
    function compare(q, p) {
        if (!q && !p) return true;
        if (!q || !p) return false;
        if (q.val !== p.val) return false
        return compare(q.right, p.left) && compare(p.right, q.left)
    }
    return compare(root, root);
};

