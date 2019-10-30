/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] <= 9) {
            return digits;
        } else {
            digits[i] = 0;
            if (i === 0) {
                return [1].concat(digits)
            }
            digits[i - 1] += 1;
        }
    }
};

console.log(plusOne([9, 9]))