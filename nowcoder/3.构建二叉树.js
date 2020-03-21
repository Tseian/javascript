/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
*/

function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length == 0 || vin.length == 0) return null;

    let node = { val: pre[0] };
    for (let i = 0; i < vin.length; i++) {
        if (vin[i] === pre[0]) {

            //   root.left = reConstructBinaryTree(Arrays.copyOfRange(pre, 1, i + 1), Arrays.copyOfRange(in, 0, i));
            //   root.right = reConstructBinaryTree(Arrays.copyOfRange(pre, i + 1, pre.length), Arrays.copyOfRange(in, i + 1, in.length));
            node.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
            node.right = reConstructBinaryTree(pre.slice(i + 1, pre.length), vin.slice(i + 1, vin.length));
            break;
        }
    }
    return node;
}
module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};