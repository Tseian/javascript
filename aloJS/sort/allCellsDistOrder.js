/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    let arr = [];
    for (let j = 0; j < R; j++) {
        for (let i = 0; i < C; i++) {
            let dis = Math.abs(i - c0) + Math.abs(j - r0);
            arr[dis] = arr[dis] || [];
            arr[dis].push([j, i])
        }
    }
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i]) {
            arr[i].forEach(element => {
                if (i != 0)
                    arr[0].push(element);
            });
        }
    }
    return arr[0];
};
console.log(allCellsDistOrder(2, 3, 0, 2))