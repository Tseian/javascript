/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return;
    let root = sortedArrayToBST1(nums, 0, nums.length - 1)
    return root;
};

var sortedArrayToBST1 = function (nums, l, r) {
    if (l > r) return null;
    let mid = parseInt((l + r) / 2)
    let root = { val: nums[mid], left: null, right: null }

    root.left = sortedArrayToBST1(nums, l, mid - 1)
    root.right = sortedArrayToBST1(nums, mid + 1, r)
    return root;
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))