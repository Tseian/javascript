/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 子节点的值等于    父节点的值*2 + 子节点当前值
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let ans = 0
var sumRootToLeaf = function (root) {
    if (!root) return 0
    let sum = { sum: 0, }
    return helper(root, sum);
};

function helper(root, sum) {
    if (!root) return 0
    sum.sum = sum.sum * 2 + root.val
    if (!root.left && !root.right) {
        ans += sum.sum;
    } else {
        helper(root.left, sum)
        helper(root.right, sum)
    }
    return ans
}