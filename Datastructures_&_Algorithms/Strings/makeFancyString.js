/**
 * **1957. Delete Characters to Make Fancy String**
 *
 * A **fancy string** is a string where no **three consecutive**
 * characters are equal.
 *
 * Given a string `s`, delete the **minimum** possible number of
 * characters from `s` to make it **fancy**.
 *
 * Return the final string after the deletion. It can be shown that the
 * answer will always be **unique**.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists only of lowercase English letters.
 *
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function (s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1] && result.slice(-1) === s[i]) {
            result = result.slice(0, -1);
        }
        result += s[i];
    }

    return result;
};

const s = 'leeetcode';
// Output: "leetcode"
/* Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode". */
console.log(makeFancyString(s));

const s1 = 'aaabaaaa';
// Output: "aabaa"
/* Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa". */
console.log(makeFancyString(s1));

const s2 = 'aab';
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".
console.log(makeFancyString(s2));
