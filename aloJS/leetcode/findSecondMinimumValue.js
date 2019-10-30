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
var findSecondMinimumValue = function (root) {
    if (!root) return -1;
    let q = [root];
    let min = root.val;
    let smin = 1000000000;
    while (q[0]) {

        let s = q.pop();

        if (min < s.val && smin > s.val) {
            smin = s.val;
        }

        if(s.left)q.push(s.left);
        if(s.right)q.push(s.right);

    }
    return smin ? -1 : smin;
};