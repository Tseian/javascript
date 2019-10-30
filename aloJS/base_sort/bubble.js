/**
 * 冒泡排序
 */

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([6, 3, 4, 5]))

// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let tem = arr[j];
//                 arr[j] = arr[j + 1] ;
//                 arr[j + 1] = tem;
//             }
//         }
//     }
//     return arr;
// }


// console.log(bubbleSort([6, 3, 4, 5]))