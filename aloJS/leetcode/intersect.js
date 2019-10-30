/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let r1 = {};
    let r2 = {};
    nums1.forEach(e => {
        if (!r1[e]) r1[e] = 0;
        r1[e] += 1;
    });
    nums2.forEach(e => {
        if (!r2[e]) r2[e] = 0;
        r2[e] += 1;
    });
    let res = [];
    for (let k in r1) {
        if (r1[k] && r2[k]) {
            let i = r1[k];
            if (r1[k] < r2[k]) i = r2[k];
            while (i) {
                i--;
                res.push(k)
            }
        }

    }
    return res
};