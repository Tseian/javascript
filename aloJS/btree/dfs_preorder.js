const btr = require("./btree");

/**
 * preorder
 * 先序遍历
 *  根 -》左 -》右
 * @param {*} root 
 */
function preorder_recursion(root) {
    if (!root) {
        return
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}


function preorder_iterate(root) {
    let queue = [root];
    while (queue[0]) {
        let s = queue.pop();
        if (s) {
            console.log(s.val);
            if (s.right) queue.push(s.right);
            if (s.right) queue.push(s.left);
        }
    }
}

preorder_iterate(btr.bst)
// preorder_recursion(btr.bst)
