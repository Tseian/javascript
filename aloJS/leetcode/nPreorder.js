/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) {
        return;
    }

    let sum = [];
    helper(root, sum);
    return sum;
};


function helper(root, sum) {
    if (!root) {
        return [];
    }
    sum.push(root.val)
    for (let i = 0; i < root.children.length; i++) {
        helper(root.children[i], sum);
    }
}