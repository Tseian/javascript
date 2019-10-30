/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 递归遍历 再对子树进行遍历 一旦满足条件将结果记录起来，再跳入下一个
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    if (!root) {
        return 0
    } else {
        return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    }
};

function helper(root, sum) {
    if (!root) return 0;
    sum -= root.val;
    return (sum == 0 ? 1 : 0) + helper(root.left, sum) + helper(root.right, sum);
}