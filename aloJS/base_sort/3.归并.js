/*
//将有二个有序数列a[first...mid]和a[mid...last]合并。
*/
function sort(nums) {
    helper(nums, 0, nums.length - 1);
    return nums;
}

function helper(nums, l, r) {
    // recursion terminator
    if (l >= r) return;
    // prepare data
    let mid = parseInt((l + r) / 2);
    // conquer subProblem
    helper(nums, l, mid);
    helper(nums, mid + 1, r);
    // process and generate the final result
    merge(nums, l, mid, r);
}

function merge(nums, l, mid, r, res = []) {
    let i = l;
    let j = mid + 1;
    let k = 0;

    // 将小的放在首部
    while (i <= mid && j <= r) {
        if (nums[i] <= nums[j]) {
            res[k++] = nums[i++];
        } else {
            res[k++] = nums[j++];
        }
    }

    // 剩下的都是较大的放在后面 且i<=mid与j<=r互斥
    while (i <= mid) {
        res[k++] = nums[i++];
    }

    while (j <= r) {
        res[k++] = nums[j++];
    }

    for (i = 0; i < k; i++) {
        nums[l++] = res[i];
    }
}

console.log(sort([3, 2, 5, 8, 1, 2]))