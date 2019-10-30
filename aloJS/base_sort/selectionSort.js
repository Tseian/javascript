/**
 * 选择排序 
 * 1、初始状态：无序区为R[1..n]，有序区为空；
 * 2、第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。
 * 该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，
 * 使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
 * 3、n-1趟结束，数组有序化了。
 */

function selectionSort(arr) {
    let len = arr.length;
    let tem, minIndex;
    for (let i = 0; i < len; i++) {
        tem = arr[i];
        minIndex = i;
        for (let j = i; j < len; j++) {
            if (tem > arr[j]) {
                tem = arr[j];
                minIndex = j;
            }
        }
        tem = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tem;
    }
    return arr;
}

// function selectionSort(arr) {

//     let len = arr.length;
//     let tem, minIndex;

//     for (let i = 0; i < len; i++) {
//         tem = arr[i];
//         minIndex = i;
//         for (let j = i; j < len; j++) { //在剩下中间找到一个最小的
//             if (tem > arr[j]) {
//                 tem = arr[j];
//                 minIndex = j;
//             }
//         }
//         //当前和最小的进行替换
//         tem = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = tem;
//     }

//     return arr;
// }

console.log(selectionSort([0, 3, 2, 1]))