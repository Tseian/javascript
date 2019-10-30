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
var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0
    } else {
        let sum = { sum: 0 }
        return helper(root, sum)
    }
};

function helper(root, sum) {
    if (!root) {
        return 0;
    }
    if (root.left && !root.left.left && !root.left.right) {
        sum.sum += root.left.val;
    }
    helper(root.left, sum);
    helper(root.right, sum);
    return sum.sum;
}