/**
 * **1291. Sequential Digits**
 *
 * An integer has *sequential digits* if and only if each digit in the number is
 * one more than the previous digit.
 *
 * Return a **sorted** list of all the integers in the range `[low, high]`
 * inclusive that have sequential digits.
 *
 * **Constraints:**
 *
 * - `10 <= low <= high <= 10^9`
 *
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
    const result = [];
    const digits = '123456789';

    const numLength = String(low).length;
    const maxNumLength = String(high).length;

    for (let l = numLength; l <= maxNumLength; l++) {
        for (let i = 0; i <= 9 - l; i++) {
            const num = parseInt(digits.substring(i, i + l));
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result.sort((a, b) => a - b);
};
