/**
 * **1903. Largest Odd Number in String**
 *
 * You are given a string `num`, representing a large integer. Return *the
 * **largest-valued** odd integer (as a string) that is a **non-empty
 * substring** of `num`, or an empty string `""` if no odd integer exists.
 *
 * A **substring** is a contiguous sequence of characters within a string.
 *
 * **Constraints:**
 *
 * - `1 <= num.length <= 105`
 * - `num` only consists of digits and does not contain any leading zeros.
 *
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        let lastDigit = parseInt(num[i]);

        if (lastDigit % 2 === 1) {
            return num.substring(0, i + 1);
        }
    }

    return '';
};

const num = '52';
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
console.log(largestOddNumber(num));
