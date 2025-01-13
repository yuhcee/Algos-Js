/**
 * **3223. Minimum Length of String After Operations**
 *
 * You are given a string `s`.
 *
 * You can perform the following process on `s` **any** number of times:
 *
 * - Choose an index `i` in the string such that there is at least one
 * character to the left of index `i` that is equal to `s[i]`, and at least
 * one character to the right that is also equal to `s[i]`.
 * - Delete the **closest** character to the **left** of index `i` that is
 * equal to `s[i]`.
 * - Delete the **closest** character to the **right** of index `i` that is
 * equal to `s[i]`.
 *
 * Return the **minimum** length of the final string s that you can achieve.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 2 * 105`
 * - `s` consists only of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const minimumLength = function (s) {
    const charFrequencyMap = new Map();

    for (const char of s) {
        charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1);
    }

    let deleteCount = 0;
    for (const frequency of charFrequencyMap.values()) {
        if (frequency % 2 === 1) {
            deleteCount += frequency - 1;
        } else {
            deleteCount += frequency - 2;
        }
    }

    return s.length - deleteCount;
};
