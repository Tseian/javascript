/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;
    let r = getDeep(root)
    if (r === -1) return false;
    return true
};

var getDeep = function (root) {
    if (!root) {
        return 0;
    } else {
        let l = getDeep(root.left);
        if (l === -1) return -1;
        let r = getDeep(root.right);
        if (r === -1) return -1;
        let d = l > r ? l - r : r - l;
        if (d > 1) return -1;
        return Math.max(l, r) + 1
    }
}

let b = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 2,
            left: {
                val: 2,
                left: {
                    val: 2,
                    left: {
                        val: 2,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 2,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
}

console.log(isBalanced(b))