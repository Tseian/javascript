/**
 * 数组去重 支持多维数据
 * @param {*} arr 
 * @param {*} target 
 */

function unique(arr, index) {
    if (index == arr.length) return arr;
    let next = index + 1;
    if (Array.isArray(arr[index])) {
        arr[index] = unique(arr[index], 0);
        return unique(arr, next);
    } else {
        let hasSame = -1;
        for (let i = 0; i < index; i++) {
            if (arr[i] == arr[index]) {
                hasSame = i;
                break;
            }
        }
        if (hasSame > -1) { //删除
            arr.splice(hasSame, 1)
            return unique(arr, index);
        } else {
            return unique(arr, next);
        }
    }
}

const result = unique([1, 2, 2, 3, 4, [3, 3, 4, 4, [4, 4, 4, 4, 6, 6, 6, 6]]], 0)

console.log(result) // [ 1, 2, 3, 4, [ 3, 4, [ 4,6,6,6, 6 ] ] ]