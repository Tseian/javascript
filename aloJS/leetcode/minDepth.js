/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let m = 2 ** 32
    if (root.left) m = Math.min(minDepth(root.left), m)
    if (root.right) m = Math.min(minDepth(root.right), m)
    return m + 1;
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
console.log(minDepth(b))