/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    } else {
        let l = maxDepth(root.left)
        let r = maxDepth(root.right)
        return l > r ? l + 1 : r + 1;
    }
};
