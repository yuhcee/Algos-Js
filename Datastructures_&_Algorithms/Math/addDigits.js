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
