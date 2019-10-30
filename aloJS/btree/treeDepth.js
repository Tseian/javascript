const btree = require("./btree")

let a = 0;
function depth(root) {
    if (!root) return 0;
    let left = depth(root.left);
    let right = depth(root.right);

    if (left >= right) {
        a = left + 1
        return left + 1;
    } else {
        a = right + 1
        return right + 1;
    }
}

console.log(depth(btree.btree))
console.log(a)