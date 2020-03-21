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

// inorder_iterate(btr.bst);

// inorder_recursion(btr.bst)

function dfs(node) {
    if (!node) return
    dfs(node.left);
    console.log(node.val);
    dfs(node.right);
}
// dfs(btr.bst);


function bfs(node) {
    if (!node) return
    let stack = [node];
    while (stack.length) {
        let n = stack.length;
        for (let i = 0; i < n; i++) {
            let s = stack.shift();
            console.log(s.val)
            if (s.left) stack.push(s.left);
            if (s.right) stack.push(s.right);
        }
    }
}
bfs(btr.bst);
console.table(btr.bst)