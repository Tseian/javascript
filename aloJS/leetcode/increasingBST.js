/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 中序遍历 后生成只有右子树的数
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    if (!root) {
        return
    }
    let c = {}
    let res = { res: c, c };
    helper(root, res);
    return res.right
};
function helper(root, res) {
    if (!root) {
        return null
    }
    helper(root.left, res);
    res.c.right = { val: root.val, left: null };
    res.c = res.c;
    helper(root.right, res);
}