/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 层次优先遍历
 * 没往下一层count + 1
 * 求出左右两棵树的最长路径相加即可
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let max = 0;
var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    max = 0;
    helper(root);
    return max;
};

function helper(root) {
    if (!root) {
        return 0;
    }
    let l = helper(root.left)
    let r = helper(root.right)
    max = Math.max(l + r, max)
    return Math.max(l, r) + 1;
}