/**
 * **1790. Check if One String Swap Can Make Strings Equal**
 *
 * You are given two strings `s1` and `s2` of equal length. A **string
 * swap** is an operation where you choose two indices in a string (not
 * necessarily different) and swap the characters at these indices.
 *
 * Return `true` if it is possible to make both strings equal by performing
 * **at most one string swap** on **exactly one** of the strings.
 * Otherwise, return `false`.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 100`
 * - `s1.length == s2.length`
 * - `s1` and `s2` consist of only lowercase English letters.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true; // Already equal

    let diff = [];

    // Collect differing indices
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
            if (diff.length > 2) return false; // More than 2 differences → impossible
        }
    }

    // If exactly 2 differences, check if swapping makes them equal
    return diff.length === 2 && s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};

const s1 = 'bank',
    s2 = 'kanb';
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
console.log(areAlmostEqual(s1, s2));

const s11 = 'attack',
    s21 = 'defend';
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
console.log(areAlmostEqual(s11, s21));

const s12 = 'kelb',
    s22 = 'kelb';
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
console.log(areAlmostEqual(s12, s22));