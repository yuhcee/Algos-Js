/**
 * **1239. Maximum Length of a Concatenated String with Unique Characters**
 *
 * You are given an array of strings `arr`. A string `s` is formed by the **concatenation** of a
 * **subsequence** of `arr` that has **unique characters**.
 *
 * Return *the **maximum** possible length of `s`.
 *
 * A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 *
 *  **Constraints:**
 * - `1 <= arr.length <= 16`
 * - `1 <= arr[i].length <= 26`
 * - `arr[i]` contains only lowercase English letters.
 *
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = function (arr) {};

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
