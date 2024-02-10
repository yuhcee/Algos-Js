/**
 * **647. Palindromic Substrings**
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 1000`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 *
 */
/* const countSubstrings = (s) => {
    const len = s.length;
    const dp = [];
    let count = 0;

    for (let i = 0; i < len; i++) {
        dp[i] = Array(len).fill(false);
        dp[i][i] = true;
        count++;
    }

    for (let j = 1; j < len; j++) {
        const rowEnd = len - j;
        for (let row = 0, col = j; row < rowEnd; row++, col++) {
            if (s.charAt(row) === s.charAt(col)) {
                if (j === 1 || dp[row + 1][col - 1] === true) {
                    dp[row][col] = true;
                    count++;
                }
            }
        }
    }

    return count;
}; */
var countSubstrings = (s) => {
    let count = 0; // Variable to store the count of palindromic substrings
    const n = s.length; // Length of the input string
    const dp = {}; // Object to store whether a substring is a palindrome

    // Loop through the string from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Loop through the string from the current index to the end
        for (let j = i; j < n; j++) {
            // Check if the substring from index i to index j is a palindrome
            // A substring is a palindrome if the characters at both ends match and the substring within them is also a palindrome
            if (s[i] === s[j] && (j - i <= 2 || dp[`${i + 1}-${j - 1}`])) {
                // If the substring is a palindrome, update the dp object and increment the count
                dp[`${i}-${j}`] = true;
                count++;
            }
        }
    }

    return count; // Return the count of palindromic substrings
};

const s = 'abc';
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
console.log(countSubstrings(s));

const s1 = 'aaa';
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
console.log(countSubstrings(s1));

const s2 = 'racecar';
// Output: 10
// Explanation: Nine palindromic strings: "r", "a", "c", "e", "ca", "ace", "racecar", "cec", "aceca".
console.log(countSubstrings(s2));
