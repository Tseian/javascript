/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function (root) {
    if (!root) return root;
    let first, last;
    function helper(node) {
        if (node) {
            helper(node.left);
            if (last) {
                last.right = node;
                node.left = last;
            } else {
                first = node;
            }
            last = node;
            helper(node.right);
        }
    }

    helper(root);
    // close DLL
    last.right = first;
    first.left = last;
    return first;
};




var treeToDoublyList_ = function (root) {
    if (!root)
        return root;
    let pre = {};
    let res = pre;
    let stack = [];
    while (root || stack[0]) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            pre.right = root;
            root.left = pre;
            pre = root;
            root = root.right;
        }
    }
    pre.right = res.right;
    res.right.left = pre;
    return res.right;
};

const { bst } = require("../btree/btree");

console.log(treeToDoublyList_(bst));