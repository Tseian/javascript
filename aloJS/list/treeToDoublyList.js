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
let first, last;
var treeToDoublyList = function (root) {
    if (root == null)
        return root;


    helper(root);
    // close DLL
    last.right = first;
    first.left = last;
    return first;

};

function helper(node) {
    if (node) {
        helper(node.left)
        if (last) {
            last.right = node
            node.left = last
        } else {
            first = node
        }
        last = node;
        helper(node.right);
    }
}

const { bst } = require("../btree/btree");

console.log(treeToDoublyList(bst));