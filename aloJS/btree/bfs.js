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

const btree = require("./btree")
bfs(btree.bst)