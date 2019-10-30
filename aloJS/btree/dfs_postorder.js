/**
 * postorder
 * 后序遍历
 * 左 -》右 -》根
 * @param {*} root 
 */
const btr = require("./btree");
function postorder_recursion(root) {
    if (!root) {
        return;
    }
    inorder_recursion(root.left);
    inorder_recursion(root.right);
    console.log(root.val);
}
function postorder_iterate(root) {
    let queue = [];
    while (queue[0] || root) {
        while (root) {
            queue.push(root);
            if (root.left) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        let s = queue.pop();
        console.log(s.val);
        if (queue[0] && s == queue[queue.length - 1].left) {
            root = queue[queue.length - 1].right;
        } else {
            root = null;
        }
    }
}

// postorder_iterate(btr.bst);
// inorder_recursion(btr.bst)