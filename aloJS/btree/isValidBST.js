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
var isValidBST = function (root) {
    if (!root) return true
    let sum = [];
    helper(root, sum);

    for (let i = 1; i < sum.length; i++) {
        if (sum[i - 1] > sum[i]) return false
    }
    return true
};

function helper(root, sum) {
    if (!root) return true
    helper(root.left, sum)
    sum.push(root.val)
    helper(root.right, sum)
}