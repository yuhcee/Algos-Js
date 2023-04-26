/**
 * **258. Add Digits**
 *
 * Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * **Constraints:**
 *
 * - `0 <= num <= 231 - 1`
 *
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum < 10 ? sum : addDigits(sum);
};

const num = 38;
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it
console.log(addDigits(num));

const num1 = 0;
// Output: 0
console.log(addDigits(num1));

const num2 = 1;
// Output: 1
console.log(addDigits(num2));
