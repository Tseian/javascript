/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

let dept = {};
let parants = {};
var isCousins = function (root, x, y) {
    if (!root) return false;
    dept = {};
    parants = {};
    helper(root, null);

    return parants[x] != parants[y] && dept[x] != dept[y];
};

function helper(root, parant) {
    if (!root) return
    parants[root.val] = parant
    dept[root.val] = parant ? 1 + dept[parant.val] : 0
    helper(root.left, root);
    helper(root.right, root);
}
