/**
 * **1239. Maximum Length of a Concatenated String with Unique
 * Characters**
 *
 * You are given an array of strings `arr`. A string `s` is formed by the
 * **concatenation** of a
 * **subsequence** of `arr` that has **unique characters**.
 *
 * Return *the **maximum** possible length of `s`.
 *
 * A **subsequence** is an array that can be derived from another array
 * by deleting some or no elements without changing the order of the
 * remaining elements.
 *
 *  **Constraints:**
 * - `1 <= arr.length <= 16`
 * - `1 <= arr[i].length <= 26`
 * - `arr[i]` contains only lowercase English letters.
 *
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = function (arr) {
    function hasUniqueChars(word) {
        const map = new Map();
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (map.has(char)) return false;
            map.set(char, true);
        }
        return true;
    }

    let res = 0;

    function dfs(idx, str) {
        if (idx === arr.length) return;
        const newStr = str + arr[idx];

        if (hasUniqueChars(newStr)) {
            res = Math.max(res, newStr.length);
            dfs(idx + 1, newStr);
        }
        dfs(idx + 1, str);
    }

    dfs(0, '');
    return res;
};

const arr = ['un', 'iq', 'ue'];
// Output: 4
/* Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4. */
console.log(maxLength(arr));

const arr1 = ['cha', 'r', 'act', 'ers'];
// Output: 6
/* Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers"). */
console.log(maxLength(arr1));

const arr2 = ['abcdefghijklmnopqrstuvwxyz'];
// Output: 26
// Explanation: The only string in arr has all 26 characters.
console.log(maxLength(arr2));
