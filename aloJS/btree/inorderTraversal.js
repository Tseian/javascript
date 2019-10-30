/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return [];
    let sum = [];
    helper(root, sum);
    return sum;
};

function helper(root, sum) {
    if (!root) return [];
    helper(root.left, sum);
    sum.push(root.val);
    helper(root.right, sum);
}