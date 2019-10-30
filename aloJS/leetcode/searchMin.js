/**
 * 分支策略找出最小的数字
 * @param {*} nos 
 */
function search(nos) {
    return search2(nos, 0, nos.length - 1)
}

function search2(nos, l, r) {
    if (l === r) {
        return nos[l];
    } else {
        let mid = parseInt((l + r) / 2);
        let left = search2(nos, l, mid)
        let right = search2(nos, mid + 1, r)
        return min(left, right)
    }
}

function min(a, b) {
    return a > b ? b : a;
}

console.log(search([1, 2, 4, 5, 3, 0, -1]))