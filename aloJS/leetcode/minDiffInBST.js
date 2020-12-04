/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 中序遍历同时记住上一个node
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    let res = [];
    helper(root, res);
    let r = 999
    console.log(res)
    for (let i = 1; i < res.length; i++) {
        
        r = Math.min(r, res[i] - res[i - 1])
    }
    return r
};

function helper(root, res) {
    if (!root) return null;
    helper(root.left, res)
    res.push(root.val)
    helper(root.right, res)
}