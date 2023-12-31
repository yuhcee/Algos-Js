/**
 * **1624. Largest Substring Between Two Equal Characters**
 *
 * Given a string `s`, return *the length of the longest substring
 * between two equal characters, excluding the two characters*. If there
 * is no such substring return `-1`.
 *
 * A **substring** is a contiguous sequence of characters within a
 * string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 300`
 * - `s` contains only lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
    const firstOccurrence = new Map();
    let maxLength = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (firstOccurrence.has(char)) {
            maxLength = Math.max(maxLength, i - firstOccurrence.get(char) - 1);
        } else {
            firstOccurrence.set(char, i);
        }
    }

    return maxLength;
};
