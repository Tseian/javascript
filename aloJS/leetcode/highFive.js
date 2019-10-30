/**
 * @param {number[][]} items
 * @return {number[][]}
 */

/**
 * 插入排序
 * @param {*} arr 
 * @param {*} item 
 */
const insertSort = (arr, item) => {
    if (arr.length === 0) return arr.push(item);
    let len = arr.length
    let index = len;
    for (let i = 0; i < len; i++) {
        if (item > arr[i]) {
            index = i;
            break;
        }
    }
    if (index === len) return arr.push(item);
    for (let i = len; i >= index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = item;
}
var highFive = function (items) {
    let res = {};
    for (let i = 0, len = items.length; i < len; i++) {
        let item = items[i];
        let id = item[0];
        let score = item[1];
        if (!res[id]) res[id] = [];
        insertSort(res[id], score);
    }
    let r = []
    for (let i in res) {
        let re = []; re.push(Number(i))
        let scores = res[i];
        let len = scores.length > 5 ? 5 : scores.length;
        let total = 0;
        for (let s = 0; s < len; s++) {
            total += scores[s];
        }
        re.push(parseInt((total / len)))
        r.push(re);
    }
    return r;
};
highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]);