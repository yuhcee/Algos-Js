/**
 * **1544. Make The String Great**
 *
 * Given a string `s` of lower and upper case English letters.
 *
 * A good string is a string which doesn't have **two adjacent characters** `s[i]` and `s[i + 1]` where:
 *
 * - `0 <= i <= s.length - 2`
 * - `s[i]` is a lower-case letter and `s[i + 1]` is the same letter but in upper-case or **vice-versa**.
 *
 * To make the string good, you can choose **two adjacent** characters that make the string bad and remove them. You
 * can keep doing this until the string becomes good.
 *
 * Return the *string after making it good. The answer is guaranteed to be unique under the given constraints.
 *
 * **Notice** that an empty string is also good.
 *
 * **Constraints:**
 * - `1 <= s.length <= 100`
 * - `s` contains only lower and upper case English letters.
 *
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
    let str = '';
    for (let i = 0; i < s.length; i += 1) {
        if (!str) {
            str = s[i];
            continue;
        }

        let char = str[str.length - 1];

        if (char === char.toUpperCase()) {
            if (s[i] === char.toLowerCase()) str = str.slice(0, str.length - 1);
            else str += s[i];
        } else {
            if (s[i] === char.toUpperCase()) str = str.slice(0, str.length - 1);
            else str += s[i];
        }
    }
    return str;
};

const s = 'leEeetcode';
// Output: "leetcode"
/* Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode". */
console.log(makeGood(s));

const s1 = 'abBAcC';
// Output: ""
/* Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> "" */
console.log(makeGood(s1));
