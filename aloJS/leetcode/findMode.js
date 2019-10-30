/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 左子树 都会小于等于当前节点值
 * 右子树 都会大于等于当前节点值
 * 做一次遍历 记录每一个值出现的频率
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let pre = null;
let max = 0;
let current = 1;
let res = [];
var findMode = function (root) {
    if (!root) {
        return
    } else {
        pre = null;
        max = 0;
        current = 1;
        res = [];
        helper(root, pre, max, current, res)
        return res;
    }
};

function helper(root) {
    if (!root) {
        return
    }
    helper(root.left)
    if (pre) {
        if (pre.val == root.val) {
            current = current + 1;
        } else {
            current = 1;
        }
    }
    if (current == max) {
        res.push(root.val);
    } else if (current > max) {
        res = [];
        res.push(root.val);
        max = current;
    }
    pre = root;
    helper(root.right);
}