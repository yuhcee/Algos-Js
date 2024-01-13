/**
 * **1347. Minimum Number of Steps to Make Two Strings Anagram**
 *
 * You are given two strings of the same length `s` and `t`. In one step you can choose **any
 * character** of `t` and replace it with **another character**.
 *
 * Return *the minimum number of steps to make `t` an anagram of `s`*.
 *
 * An **Anagram** of a string is a string that contains the same characters with a different (or
 * the same) ordering.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 5 * 104`
 * - `s.length == t.length`
 * `s` and `t` consist of lowercase English letters only.
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function (s, t) {
    // Step 1: Create frequency arrays
    const freqS = new Array(26).fill(0);
    const freqT = new Array(26).fill(0);

    // Step 2: Update frequency of characters in string s
    for (let char of s) {
        freqS[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Step 3: Update frequency of characters in string t
    for (let char of t) {
        freqT[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Step 4: Calculate the sum of absolute differences
    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.max(0, freqS[i] - freqT[i]);
    }

    // Step 5: Return the result
    return steps;
};

const s = 'bab',
    t = 'aba';
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
console.log(minSteps(s, t));
