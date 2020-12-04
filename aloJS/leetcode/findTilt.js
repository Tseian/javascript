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
var findTilt = function (root) {
    if (!root) {
        return 0
    }
    let sum = { sum: 0 };
    helper(root, sum)
    return sum.sum;
};

function helper(root, sum) {
    if (!root) {
        return;
    }


    let l = helper(root.left, sum)
    let r = helper(root.right, sum)

    sum.sum = Math.abs(l - r)
    return l + r + root.val

}