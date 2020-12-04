/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    if (!root || !k) {
        return false
    }
    let res = { res: false };
    helper(root, res, k)
    return res.res;
};

function helper(root, res, k) {
    if (!root) { return false }

    if (res[root.val]) {
        res.res = true;
        return true
    };
    res[k - root.val] = true;

    helper(root.left, res, k);
    helper(root.right, res, k);
}