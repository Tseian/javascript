/**
 * 任意两边相加大于第三边
 * 排序由达到小
 * 如果 a[n] < a[n-1] + a[n-2] 满足添加返回
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    for (let i = 0, len = A.length; i < len; i++) {
        let t = i + 1;
        let b = A[i];
        let bb = i;
        while (t < len) {
            if (A[t] > b) {
                bb = t;
                b = A[t];
            }
            t++;
        }
        A[bb] = A[i];
        A[i] = b;

        if (A[i - 1] && A[i - 2] && b) {
            let two = A[i - 1] + b;
            if (two > A[i - 2]) {
                return A[i - 1] + A[i - 2] + b;
            }
        }
    }
    return 0;
};

console.log(largestPerimeter([1, 5, 5]));