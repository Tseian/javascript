/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === val) {
            for (let j = i; j < len - 1; j++) {
                if (nums[j + 1] || nums[j + 1] === 0) {
                    nums[j] = nums[j + 1];
                }
            }
            i--;
            nums.pop();
        }
    }
    console.log(nums);
    return nums.length;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)