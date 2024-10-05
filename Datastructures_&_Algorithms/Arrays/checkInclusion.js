/**
 * **567. Permutation in String**
 *
 * Given two strings `s1` and `s2`, return *`true` if `s2` contains a
 * permutation of s1, or `false`
 * otherwise*.
 *
 * In other words, return `true` if one of `s1`'s permutations is the
 * substring of `s2`.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 104`
 * - `s1` and `s2` consist of lowercase English letters`.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0); // to store frequency of characters in s1
    const s2Count = new Array(26).fill(0); // to store frequency of current window in s2

    // Fill the frequency array for s1 and the first window of s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // Check if the two frequency arrays are equal initially
    const matches = () => s1Count.every((count, index) => count === s2Count[index]);

    // Sliding window over s2
    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (matches()) return true;

        // Slide the window: remove the character at the left and add the one at the right
        if (i + s1.length < s2.length) {
            s2Count[s2.charCodeAt(i) - 97]--; // remove left char
            s2Count[s2.charCodeAt(i + s1.length) - 97]++; // add right char
        }
    }

    return matches();
};

const s1 = 'ab',
    s2 = 'eidbaooo';
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
console.log(checkInclusion(s1, s2));

const s11 = 'ab',
    s21 = 'eidboaoo';
// Output: false
console.log(checkInclusion(s11, s21));
