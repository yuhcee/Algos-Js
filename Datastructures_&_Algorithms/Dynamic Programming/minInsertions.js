/**
 * **1312. Minimum Insertion Steps to Make a String Palindrome**
 *
 * Given a string `s`. In one step you can insert any character at any index of the string.
 *
 * Return *the minimum number of steps to make `s` palindrome*.
 *
 * A **Palindrome String** is one that reads the same backward as well as forward.
 *
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 500`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
    // Create a memo to store the number of insertions for each substring
    const memo = {};

    // Create a helper function to recursively find the minimum number of insertions
    const findMinInsertions = (startIndex, endIndex) => {
        // If the startIndex is greater than the endIndex, return 0
        if (startIndex > endIndex) {
            return 0;
        }

        // If the startIndex is equal to the endIndex, return 1
        if (startIndex === endIndex) {
            return 1;
        }

        // If the number of insertions for the substring starting at startIndex and ending at endIndex
        // is already in the memo, return it
        if (memo[`${startIndex},${endIndex}`] !== undefined) {
            return memo[`${startIndex},${endIndex}`];
        }

        // If the characters at the startIndex and endIndex are the same, return the number of
        // insertions for the substring starting at startIndex + 1 and ending at endIndex - 1
        if (s[startIndex] === s[endIndex]) {
            return findMinInsertions(startIndex + 1, endIndex - 1);
        }

        // Otherwise, return the minimum of the number of insertions for the substring starting at
        // startIndex + 1 and ending at endIndex and the number of insertions for the substring
        // starting at startIndex and ending at endIndex - 1
        return 1 + Math.min(findMinInsertions(startIndex + 1, endIndex), findMinInsertions(startIndex, endIndex - 1));
    };

    // Return the number of insertions for the substring starting at 0 and ending at the length of
    // the string - 1
    return findMinInsertions(0, s.length - 1);
};
