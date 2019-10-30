/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 递归
 * 返回条件 左右子树为空 表示为根节点 将当前path加入paths中 
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = [];
    btp(root, "", paths)
    return paths;
};

function btp(root, path, paths) {
    if (root) {
        path += root.val;
        if (!root.left && !root.right) {
            return paths.push(path);
        } else {
            path += "->";
            btp(root.left, path, paths);
            btp(root.right, path, paths);
        }
    }
}