/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
// let count = 0;
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let count = 0;
    root.children.forEach((c) => {
        let dept = maxDepth(c)
        count = Math.max(count, dept);
    })
    return count + 1;
};