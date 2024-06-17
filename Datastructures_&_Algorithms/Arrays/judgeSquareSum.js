/**
 * **633. Sum of Square Numbers**
 *
 * Given a non-negative integer `c`, decide whether there're two integers `a`
 * and `b` such that `a2 + b2 = c`.
 *
 * **Constraints:**
 *
 * - `0 <= c <= 231 - 1`
 *
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
    let left = 0,
        right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        let sum = left * left + right * right;
        if (sum === c) return true;
        else if (sum > c) right--;
        else left++;
    }
    return false;
};
