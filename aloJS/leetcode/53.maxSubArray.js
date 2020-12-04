/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// var maxSubArray = function (nums) {
//     if (nums.length == 1) return nums[0];
//     let max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] > 0)
//             nums[i] += nums[i - 1];
//         max = Math.max(nums[i], max);
//     }
//     return max;
// };

/**
 class Solution {
  public int crossSum(int[] nums, int left, int right, int p) {
    if (left == right) return nums[left];

    int leftSubsum = Integer.MIN_VALUE;
    int currSum = 0;
    for(int i = p; i > left - 1; --i) {
      currSum += nums[i];
      leftSubsum = Math.max(leftSubsum, currSum);
    }

    int rightSubsum = Integer.MIN_VALUE;
    currSum = 0;
    for(int i = p + 1; i < right + 1; ++i) {
      currSum += nums[i];
      rightSubsum = Math.max(rightSubsum, currSum);
    }

    return leftSubsum + rightSubsum;
  }

  public int helper(int[] nums, int left, int right) {
    if (left == right) return nums[left];

    int p = (left + right) / 2;

    int leftSum = helper(nums, left, p);
    int rightSum = helper(nums, p + 1, right);
    int crossSum = crossSum(nums, left, right, p);

    return Math.max(Math.max(leftSum, rightSum), crossSum);
  }

  public int maxSubArray(int[] nums) {
    return helper(nums, 0, nums.length - 1);
  }
}
 */
// 分治


function cross_sum(nums, left, right, p) {
    if (left == right) return nums[left];
    let lSum = -Infinity
    let currSum = 0;
    for (let i = p; i > left - 1; --i) {
        currSum += nums[i];
        lSum = Math.max(lSum, currSum);
    }

    rSum = -Infinity
    currSum = 0
    for (let i = p + 1; i < right + 1; i++) {
        currSum += nums[i];
        rSum = Math.max(rSum, currSum);
    }
    return lSum + rSum;
}

function helper(nums, left, right) {
    if (left == right) return nums[left];
    let p = (left + right) / 2;
    p = parseInt(p);
    let lSum = helper(nums, left, p);
    let rSum = helper(nums, p + 1, right);
    let crossSum = cross_sum(nums, left, right, p);
    return Math.max(lSum, rSum, crossSum);
}

var maxSubArray = function (nums) {
    return helper(nums, 0, nums.length - 1);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))