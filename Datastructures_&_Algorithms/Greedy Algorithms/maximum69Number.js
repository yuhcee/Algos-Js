/**
 * **1323. Maximum 69 Number**
 *
 * You are given a positive integer `num` consisting only of digits `6` and `9`.
 *
 * Return *the maximum number you can get by changing **at most** one digit (`6` becomes `9`, and `9` becomes `6`)*.
 *
 * **Constraints:**
 * - `1 <= num <= 104`
 * - `num` consists of only `6` and `9` digits.
 *
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
    return Number(num.toString().replace(/6/, '9'));
};

const num = 9669;
// Output: 9969
/* Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969. */
console.log(maximum69Number(num));

const num1 = 9996;
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
console.log(maximum69Number(num1));

const num2 = 9999;
// Output: 9999
// Explanation: It is better not to apply any change.
console.log(maximum69Number(num2));
