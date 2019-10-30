/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
 * 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
 * 任意节点的左、右子树也分别为二叉查找树；
 * 没有键值相等的节点。
 * 
 * q和p都大于当前root说明在最近公共祖先在右子树
 * q和p都小于当前root说明在最近公共祖先在左子树
 * 不满足上面两种情况时 此时的root节点就是最近公共祖先
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    let parantVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    if (parantVal > pVal && parantVal > qVal) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (parantVal < pVal && parantVal < qVal) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};