/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    if (!root) {
        return null;
    }
    return helper(root, { sum: 0 })
};

function helper(root, sum) {
    if (!root) {
        return;
    }
    helper(root.right, sum)
    sum.sum = root.val + sum.sum;
    root.val = sum.sum;
    helper(root.left, sum);
    return root
}