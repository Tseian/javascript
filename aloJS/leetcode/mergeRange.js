/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const swap = function (arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

const partition = function (arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        let a = arr[i][0];
        let p = arr[pivot][0];
        if (a < p) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

const quickSort = function (arr, left, right) {
    let partionIndex, len = arr.length;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partionIndex = partition(arr, left, right);
        quickSort(arr, left, partionIndex - 1);
        quickSort(arr, partionIndex + 1, right);
    }
    return arr;
}

var merge = function (intervals) {
    if (intervals.length === 0) return intervals;
    quickSort(intervals);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1];
        let c = intervals[i];
        if (last[1] >= c[0] && last[0] <= c[0]) {
            if (last[1] < c[1]) {
                last[1] = c[1];
            }
        } else {
            res.push(c);
        }
    }
    return res;
};


console.log(merge([[0, 4], [3, 5]]));