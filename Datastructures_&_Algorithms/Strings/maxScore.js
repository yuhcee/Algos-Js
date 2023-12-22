/**
 * **1422. Maximum Score After Splitting a String**
 *
 * Given a string `s` of zeros and ones, return *the maximum score after
 * splitting the string into two **non-empty** substrings (i.e. **left**
 * substring and **right** substring).
 *
 * The score after splitting a string is the number of **zeros** in the
 * **left** substring plus the number of **ones** in the **right**
 * substring.
 *
 * **Constraints:**
 *
 * - `2 <= s.length <= 500`
 * - The string `s` consists of characters `'0'` and `'1'` only.
 *
 * @param {string} s
 * @return {number}
 */
const maxScore = function (s) {
    let zerosLeft = 0;
    let onesRight = s.split('1').length - 1;

    let maxScore = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zerosLeft++;
        } else {
            onesRight--;
        }

        const currentScore = zerosLeft + onesRight;
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};
