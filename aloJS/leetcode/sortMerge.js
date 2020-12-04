/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let tail = m + n - 1;
    n--;
    m--;
    while (n >= 0 && m >= 0) {
        if (nums1[m] >= nums2[n]) {
            nums1[tail--] = nums1[m];
            m--;
        } else {
            nums1[tail--] = nums2[n];
            n--;
        }
    };
    while (n >= 0) {
        nums1[tail--] = nums2[n];
        n--;
    }
}
console.log(merge([0],
    0,
    [1],
    1
))