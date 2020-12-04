/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = 0;
    let ans = nums[0];
    for (let i = 0, len = nums.length; i < len; i++) {
        if (max > 0) {
            max += nums[i];
        } else {
            max = nums[i];
        }
        ans = Math.max(ans, max)
    };
    return ans;
}

console.log(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, - 4]))