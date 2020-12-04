// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     let p = 0;
//     let len = nums.length;

//     if (nums[len - 1] < target) return len;
//     if (nums[len - 1] == target) return len - 1;
//     if (nums[0] >= target) return 0;

//     for (let i = 0; i < len; i++) {
//         let c = nums[i];
//         if (i == len - 1) return len;
//         if (target === c) return i;
//         if (target > c && nums[i + 1] > target) {
//             return i + 1;
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length;
    if (nums[len - 1] < target) return len;
    if (nums[len - 1] == target) return len - 1;
    if (nums[0] >= target) return 0;
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return l;
};
console.log(searchInsert([1, 2, 4], 1))
