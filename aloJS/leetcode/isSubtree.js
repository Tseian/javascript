/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s && !t) {
        return true
    }

    if (!s || !t) {
        return false
    }
    let r = false;
    if (s.val != t.val) {
        r = false
    } else {
        r = helper(s, t)
    }
    let r1 = isSubtree(s.left, t)
    let r2 = isSubtree(s.right, t)
    return r2 || r1 || r;
};

function helper(s, t) {
    if (!s && !t) {
        return true
    }
    if (!s || !t) {
        return false
    }
    if (s.val == t.val) {
        return helper(s.left, t.left) && helper(s.right, t.right)
    } else {
        return false
    }
}