/*
题目描述
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
*/
// 暴力
// function Find(target, array) {
//     let row = array[0].length;
//     let col = array.length;
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (array[row][col] == target) return true;
//         }
//     }
//     return false;
// }

function Find(target, array) {
    return helper(target, array, 0, array.length - 1, 0, array[0].length - 1);
}

function helper(target, array, cs, ce, rs, re) {

    if (cs >= ce || rs >= re) return false;


    let cmid = cs + parseInt((ce - cs + 1) / 2);
    let rmid = rs + parseInt((re - rs + 1) / 2);
    let mid = array[rmid][cmid];
    if (mid == target) return true;
    else if (target < mid) { //在第一和第二份
        return helper(target, array, cs, cmid, rs, rmid)
            || helper(target, array, cmid, ce, rs, rmid);
    } else { //在第三和第四份
        return helper(target, array, cs, cmid, rmid, re)
            || helper(target, array, cmid, cs, rmid, re);
    }
}

console.log(Find(7, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]))



module.exports = {
    Find: Find
};

