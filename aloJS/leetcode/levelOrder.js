/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 暴力循环遍历
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return null;
    } else {
        let res = [];
        helper(root, res, 0);
        return res;
    }
};

function helper(root, res, index) {
    if (!root) {
        return null;
    }
    if (!res[index]) res[index] = [];
    res[index].push(root.val);
    if (root.children.length>0) {
        index++;
        root.children.forEach(element => {
            helper(element, res, index);
        });
    }
    return res;
}


var levelOrder = function (root) {
    if (!root) {
        return null;
    } else {
        let res = [];
        helper(root, res, 0);
        return res;
    }
};

 