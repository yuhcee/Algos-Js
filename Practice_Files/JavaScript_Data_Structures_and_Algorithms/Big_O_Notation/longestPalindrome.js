/**
 * **5. Longest Palindromic Substring**
 *
 * Given a string `s`, return *the longest palindromic substring in `s`*.
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let longest = s[0];

    const isPalindrome = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > longest.length) longest = s.substring(l, r + 1);
            l--;
            r++;
        }
    };
};
