/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力法 T=O(N)
// 先第一个元素匹配如果t大于则一直往前搜 直到找到或没有 终止条件为 元素值出现降序
// 如果第一个元素大于t则直接从最后面一直往前查找到或没有 终止条件为 元素值出现升序
// T=O(n)
// var search = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) return i;
//     }
//     return -1;
// };
// 优化暴力
var search = function (nums, target) {
    let res = -1;
    if (nums[0] <= target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                res = i;
                break;
            } else if (nums[i] > nums[i + 1]) break
        }
    } else {
        for (let i = nums.length - 1; i > 0; i--) {
            if (nums[i] == target) {
                res = i;
                break;
            } else if (nums[i] < nums[i - 1]) break
        }
    }
    return res;
};

function binarySearch(nums, target, low, high) {
    let mid;
    while (low <= high) {
        mid = parseInt((low + high) / 2)
        if (target == nums[mid]) return mid;
        else if (target > nums[mid]) low = mid + 1;
        else if (target < nums[mid]) high = mid - 1;
    }
    return -1;
}

// function findRotateIndex(nums) {
//     let left = 0, right = nums.length - 1;
//     if (nums[left] < nums[right]) return 0;
//     while (left <= right) {
//         let pivot = parseInt((left + right) / 2);
//         if (nums[pivot] > nums[pivot + 1])
//             return pivot + 1;
//         else {
//             if (nums[pivot] < nums[left])
//                 right = pivot - 1;
//             else
//                 left = pivot + 1;
//         }
//     }
//     return 0;

// }


function findRotateIndex(nums) {
    if (nums[0] < nums[nums.length - 1]) return 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1] && (i + 1) != nums.length) return i + 1;
    }
    return 0;
}


search = function (nums, target) {
    if (nums.length == 0)
        return -1;
    if (nums.length == 1)
        return nums[0] == target ? 0 : -1;

    let ridx = findRotateIndex(nums, target);
    if (target == nums[ridx]) return ridx;
    if (ridx == 0) return binarySearch(nums, target, 0, nums.length - 1);
    if (target >= nums[0])
        return binarySearch(nums, target, 0, ridx - 1)
    else
        return binarySearch(nums, target, ridx + 1, nums.length - 1);

}

console.log(search([3, 1], 3))
