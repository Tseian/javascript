/**
  * 返回两次操作后，数组元素之和的最小值
  * @param nums int整型一维数组 这你你需要操作的数组
  * @return long长整型
  */
// 暴力法 第一次取得最小数 第二次取得最小数
function minimumValueAfterDispel(nums) {
    // write code here
    nums.sort((a, b) => a - b);
    let max = nums[nums.length - 1];
    let res = Infinity;

    for (let j = 1; j <= max; j++) {
        for (let jj = 1; jj <= max; jj++) {
            let r = 0;
            let jianshu = j + jj;
            let temA = new Array(...nums);
            for (let z = 0; z < temA.length; z++) {
                if (jianshu <= temA[z]) {
                    let tem = temA[z] - jianshu;
                    temA[z] = tem;
                    r += tem;
                } else {
                    r += temA[z]
                }
            }
            res = Math.min(r, res);
        }

    }
    return res;
}
module.exports = {
    minimumValueAfterDispel: minimumValueAfterDispel
};
console.log(minimumValueAfterDispel([9, 1, 2, 7, 2, 1, 6, 0, 1, 8]))