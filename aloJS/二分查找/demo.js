function binarySearch(nums, k) {
    let low = 0, high = nums.length, mid;
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        if (k > nums[mid]) {
            low = mid + 1;
        } else if (k < nums[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4], 2))