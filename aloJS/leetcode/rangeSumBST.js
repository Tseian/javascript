/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let sum = { sum: 0 };
    helper(root, sum, L, R);
    return sum.sum;
};

function helper(root, sum, L, R) {
    if (!root) return
    helper(root.left, sum, L, R);
    if (root.val >= L && root.val <= R) sum.sum += root.val;
    helper(root.right, sum, L, R);
}