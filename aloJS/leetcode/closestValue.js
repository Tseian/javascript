/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * let l =| root.left - target |
 * let r =| root.right - target |
 *没有用二叉搜索树特点 直接暴力遍历二叉树   同时记录一个最小值
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    if (!root) {
        return null;
    } else {
        return helper(root, root.val, target)
    }
};

function helper(root, min, target) {
    if (!root) {
        return min;
    }

    if (Math.abs(min - target) >= Math.abs(target - root.val)) {
        min = root.val;
    }

    let l = helper(root.left, min, target);
    let r = helper(root.right, min, target);

    if (Math.abs(l - target) <= Math.abs(target - r)) {
        return l;
    } else {
        return r;
    }
}