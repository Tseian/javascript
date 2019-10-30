/**
 * inorder
 * 中序遍历
 * 左 -》根 -》右
 * 得到一个升序的数组
 * @param {*} root 
 */
const btr = require("./btree");
function inorder_recursion(root) {
    if (!root) {
        return;
    }
    inorder_recursion(root.left);
    console.log(root.val);
    inorder_recursion(root.right);
}

function inorder_iterate(root) {
    let queue = [];
    while (queue[0] || root) {
        while (root) {
            queue.push(root);
            root = root.left;
        }
        root = queue.pop();
        console.log(root.val);
        root = root.right;
    }
}

inorder_iterate(btr.bst);

// inorder_recursion(btr.bst)