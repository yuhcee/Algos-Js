/**
 * **2864. Maximum Odd Binary Number**
 *
 * You are given a **binary** string s that contains at least one '1'.
 *
 * You have to **rearrange** the bits in such a way that the resulting
 * binary number is the **maximum odd binary number** that can be created
 * from this combination.
 *
 * Return *a string representing the maximum odd binary number that can be
 * created from the given combination.*
 *
 * **Note** that the resulting string can have leading zeros.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 100`
 * - `s` consists only of `'0'` and `'1'`.
 * - `s` contains at least one `'1'`.
 *
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
    let chars = s.split('').sort().reverse();
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '1') {
            [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
            break;
        }
    }
    return chars.join('');
};

const s = '010';
// Output: "001"
// Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".
console.log(maximumOddBinaryNumber(s));

const s1 = '0101';
// Output: "1001"
// Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".
console.log(maximumOddBinaryNumber(s1));
