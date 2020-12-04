/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    if (!root1 || !root1) return false
    let res1 = [];
    let res2 = [];
    helper(root1, res1);
    helper(root2, res2);

    if (res1.length != res2.length || res1.length == 0 || res2.length == 0) {
        return false
    } else {
        for (let i = 0; i < res1.length; i++) {
            if (res1[i] !== res2[i]) return false
        }
        return true
    }
};

function helper(root, res) {
    if (!root) {
        return
    }
    if (!root.left && !root.right) {
        res.push(root.val);
    }
    helper(root.left, res)
    helper(root.right, res)

}