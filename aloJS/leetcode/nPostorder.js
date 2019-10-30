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
var postorder = function (root) {
    if (!root) {
        return [];
    }
    let sum = [];
    helper(root, sum);
    return sum;
};


function helper(root, sum) {
    if (!root) {
        return [];
    }
    for (let i = 0; i < root.children.length; i++) {
        helper(root.children[i], sum);
    }
    sum.push(root.val)
}