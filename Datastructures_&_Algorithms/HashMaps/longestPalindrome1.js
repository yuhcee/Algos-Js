/**
 * **409. Longest Palindrome**
 *
 * Given a string `s` which consists of lowercase or uppercase letters, return
 * the length of the **longest palindrome** that can be built with those letters
 *
 * Letters are **case sensitive**, for example, `"Aa"` is not considered a
 * palindrome.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 2000`
 * - `s` consists of lowercase **and/or** uppercase English letters only.
 *
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    const charCount = new Map();

    // Count the frequency of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    // Calculate the length of the longest palindrome
    for (let count of charCount.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    // If there is any character with an odd count, add one to the length
    if (hasOdd) {
        length += 1;
    }

    return length;
};
