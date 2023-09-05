/**
 * **926. Flip String to Monotone Increasing**
 *
 * A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some
 * number of 1's (also possibly none).
 *
 * You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
 *
 * Return the minimum number of flips to make s monotone increasing.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s[i]` is either `'0'` or `'1'`.
 *
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
    let n = s.length;
    // Initialize prefix and suffix arrays with zeros
    let prefix = new Array(n).fill(0);
    let suffix = new Array(n).fill(0);

    // Compute the prefix count of 1's
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + (s[i - 1] === '1' ? 1 : 0);
    }

    // Compute the suffix count of 0's
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + (s[i + 1] === '0' ? 1 : 0);
    }

    // Calculate the minimum flips for each position
    let minFlips = Math.min(suffix[0], prefix[n - 1]); // edge cases: all 0s or all 1s
    for (let i = 1; i < n; i++) {
        minFlips = Math.min(minFlips, prefix[i] + suffix[i]);
    }

    // If string has only 1s or only 0s
    if (s.indexOf('1') === -1 || s.indexOf('0') === -1) return 0;

    return minFlips;
};
const s = '00110';
// Output: 1
// Explanation: We flip the last digit to get 00111.
console.log(minFlipsMonoIncr(s));