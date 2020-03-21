/**
 * 层次遍历
 * @param {*} root 
 */
function bfs(root) {
    let q = [root];
    while (q[0]) {
        n = q.length
        for (let i = 0; i < n; i++) {
            let tem = q.pop();
            if (tem) {
                console.log(tem.val)
                if (tem.left) q.push(tem.left);
                if (tem.right) q.push(tem.right);
            }
        }
    }
}


// function bfs(root) {
//     let stack = [];
//     stack.push(root);
//     while (stack.length) {
//         let tem = stack.pop();
//         console.log(tem.val)
//         if (tem.right) stack.push(tem.right);
//         if (tem.left) stack.push(tem.left);
//     }
// }
// const btree = require("./btree")
// bfs(btree.bst)
