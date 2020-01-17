var longestWPI = function (hours) {
    let stack = [];
    let max = 0;
    let i = 0;
    for (let i = 0; i < hours.length; i++) {
        let h = hours[i];
        console.log(h)
        if (h > 8) {
            stack.push(h);
        } else {

            stack.pop();
            if (stack.length) { // 进入下一个计算周期
                i = 0;
            } else {
                i++;
                max = Math.max(i, max);
            }
        }
    }
    return max + stack.length;
};