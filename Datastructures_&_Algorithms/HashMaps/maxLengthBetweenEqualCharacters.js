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

const s = 'aa';
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
console.log(maxLengthBetweenEqualCharacters(s));

const s1 = 'abca';
// Output: 2
// Explanation: The optimal substring here is "bc".
console.log(maxLengthBetweenEqualCharacters(s1));

const s2 = 'cbzxy';
// Output: -1
// Explanation: There are no characters that appear twice in s.
console.log(maxLengthBetweenEqualCharacters(s2));
