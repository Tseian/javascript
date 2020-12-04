/**
 * inorder
 * 中序遍历
 * 左 -》根 -》右
 * 得到一个升序的数组
 * @param {*} root 
 */
const btr = require("./btree");
function inorder_recursion(root) {
    if (!root) return [];
    let res = [];
    helper(root, res);
    return res;
}

function helper(root, res) {
    if (root) {
        helper(root.left, res);
        res.push(root.val);
        helper(root.right, res);
    }
}

let res = inorder_recursion(btr.bst);
console.log(res)

// inorder_recursion(btr.bst)