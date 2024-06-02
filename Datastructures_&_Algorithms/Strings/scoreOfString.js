/**
 * **3110. Score of a String**
 *
 * You are given a string `s`. The score of a string is defined as the sum of
 * the absolute difference between the **ASCII** values of adjacent characters
 *
 * Return *the **score** of `s`*.
 *
 * **Constraints:**
 *
 * - `2 <= s.length <= 100`
 * - `s` consists only of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function (s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
};
