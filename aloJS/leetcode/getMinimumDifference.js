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

var getMinimumDifference = function (root) {
    if (!root) {
        return 0
    }
    let res = { min: 0, pre: null }
    helper(root, res)
    return res.min;
};
function helper(root, res) {
    if (!root) {
        return
    }
    helper(root.left, res)
    if (res.pre) {
        let c = Math.abs(res.pre.val - root.val)
        if (!res.min || c < res.min) res.min = c;
    }
    res.pre = root;
    helper(root.right, res)
}