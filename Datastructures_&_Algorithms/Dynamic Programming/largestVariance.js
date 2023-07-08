/**
 * **2272. Substring With Largest Variance**
 *
 * The **variance** of a string is defined as the largest difference between the number of occurrences of
 * **any** `2` characters present in the string. Note the two characters may or may not be the same.
 *
 * Given a string `s` consisting of lowercase English letters only, return *the **largest variance**
 * possible among all substrings of `s`*.
 *
 * A **substring** is a contiguous sequence of characters within a string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const largestVariance = function (s) {
    // Initialize variables
    let l = s.length; // Length of the string
    let codes = new Array(l); // Array to store the character codes
    let aCode = 'a'.charCodeAt(0); // ASCII code of 'a'
    let result = 0; // Largest variance
    let counter = new Array(26).fill(0); // Array to count occurrences of each character

    // Count occurrences of each character and store character codes
    for (let i = 0; i < l; i++) {
        codes[i] = s.charCodeAt(i) - aCode; // Store character code relative to 'a'
        counter[codes[i]]++; // Increment counter for the corresponding character
    }

    // Iterate over all possible pairs of major and minor characters
    for (let i = 0; i < 26; i++) {
        // Major character
        for (let j = 0; j < 26; j++) {
            // Minor character
            // Skip the same character and characters with no occurrences
            if (i == j || counter[i] == 0 || counter[j] == 0) {
                continue;
            }

            // Initialize counters for major and minor characters
            let majorCount = 0;
            let minorCount = 0;
            let restMinor = counter[j]; // Remaining occurrences of minor character

            // Iterate over the string and calculate variance
            for (let k = 0; k < l; k++) {
                if (codes[k] == i) {
                    majorCount++; // Increment major character count
                } else if (codes[k] == j) {
                    minorCount++; // Increment minor character count
                    restMinor--; // Decrement remaining minor character occurrences
                }

                // Check if there are occurrences of the minor character
                if (minorCount > 0) {
                    result = Math.max(result, majorCount - minorCount); // Update largest variance
                }

                // Reset counters if major character count becomes smaller than minor character count
                if (majorCount < minorCount && restMinor > 0) {
                    majorCount = 0;
                    minorCount = 0;
                }
            }
        }
    }

    return result; // Return the largest variance
};

const s = 'aababbb';
// Output: 3
/* Explanation:
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings "a", "aa", "ab", "abab", "aababb", "ba", "b", "bb", and "bbb".
- Variance 1 for substrings "aab", "aba", "abb", "aabab", "ababb", "aababbb", and "bab".
- Variance 2 for substrings "aaba", "ababbb", "abbb", and "babb".
- Variance 3 for substring "babbb".
Since the largest possible variance is 3, we return it. */
console.log(largestVariance(s));

