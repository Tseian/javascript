/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 记录每一层的节点值的总和以及每一层的节点数
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let lev = []
    let sum = []
    helper(root, 0, lev, sum)

    let r = []
    for (let i = 0; i < lev.length; i++) {
        r.push(sum[i] / lev[i])
    }
    return r;

};

function helper(root, l, lev, sum) {
    if (!root) {
        return
    }

    if (lev.length <= l) {
        lev.push(1)
        sum.push(root.val)
    } else {
        lev[l] = lev[l] + 1;
        sum[l] = sum[l] + root.val;
    }

    helper(root.left, l + 1, lev, sum);
    helper(root.right, l + 1, lev, sum);
}

 
