/**
 *  rest 将所有传入参数放入一个数组中，替代arguments
 */
function test(...values) {
    let sum = 0;
    for (let val of values) {
        console.log(sum += val);
    }
}

test(1, 2, 3, 4)