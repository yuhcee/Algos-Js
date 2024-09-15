/**
 * **1371. Find the Longest Substring Containing Vowels in Even Counts**
 *
 * Given the string `s`, return the size of the longest substring
 * containing each vowel an even number of times. That is, 'a', 'e', 'i',
 * 'o', and 'u' must appear an even number of times.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 5 x 10^5`
 * - `s` contains only lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const findTheLongestSubstring = function (s) {
    const vowelMap = {
        a: 0,
        e: 1,
        i: 2,
        o: 3,
        u: 4,
    };

    let state = 0; // Bitmask representing the current parity of vowels
    const statePos = { 0: -1 }; // To store the first occurrence of each state
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is a vowel, toggle its corresponding bit
        if (char in vowelMap) {
            const bit = vowelMap[char];
            state ^= 1 << bit; // Toggle the bit corresponding to the vowel
        }

        // If the state has been seen before, calculate the length of the valid substring
        if (state in statePos) {
            maxLength = Math.max(maxLength, i - statePos[state]);
        } else {
            // Otherwise, record the first occurrence of this state
            statePos[state] = i;
        }
    }

    return maxLength;
};
