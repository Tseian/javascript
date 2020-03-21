// /**
//  * 快速排序
//  * @param {*} arr 
//  * @param {*} left 
//  * @param {*} right 
//  */
// function quickSort(arr, left, right) {
//     var len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;

//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex - 1);
//         quickSort(arr, partitionIndex + 1, right);
//     }
//     return arr;
// }

// function partition(arr, left, right) {     // 分区操作
//     var pivot = left,                      // 设定基准值（pivot）
//         index = pivot + 1;
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }
//     }
//     swap(arr, pivot, index - 1);
//     return index - 1;
// }

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// console.log(quickSort([5, 4, 3, 122, 34, 444]))

function quickSort(nums, left, right) {
    let len = nums.length;
    left = typeof left == 'number' ? left : 0;
    right = typeof right == 'number' ? right : len - 1;
    while (left < right) {
        let partitionIndex = partion(nums, left, right);
        quickSort(nums, left, partitionIndex);
        quickSort(nums, partitionIndex + 1, right);
    }
    return nums;
}

function partition(nums, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (nums[i] < nums[pivot]) {
            swap(nums,)
        }
    }
    return index - 1;
}

function swap(nums, left, right) {
    let tem = nums[left];
    nums[left] = nums[right];
    nums[right] = tem;
}