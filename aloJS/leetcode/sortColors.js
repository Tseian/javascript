/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 */

const swap = (arr, i, j) => {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
const partition = (arr, left, right) => {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, --index);
    return index;
}
const sortColors = (arr, left, right) => {
    let partionIndex, len = arr.length;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partionIndex = partition(arr, left, right);
        sortColors(arr, left, partionIndex - 1);
        sortColors(arr, partionIndex + 1, right);
    }
    return arr;
}


 

// [0,0,1,1,2,2]
console.log(sortColors([2, 0, 2, 1, 1, 0]))