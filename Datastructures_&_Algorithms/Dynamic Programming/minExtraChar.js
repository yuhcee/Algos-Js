/**
 * **2707. Extra Characters in a String**
 *
 * You are given a **0-indexed** string `s` and a `dictionary` of words
 * dictionary. You have to break `s` into one or more **non-overlapping**
 * substrings such that each substring is present in dictionary. There
 * may be some **extra characters** in `s` which are not present in any
 * of the substrings.
 *
 * Return *the **minimum** number of extra characters left over if you
 * break up `s` optimally.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 50`
 * - `1 <= dictionary.length <= 50`
 * - `1 <= dictionary[i].length <= 50`
 * - `dictionary[i]` and `s` consists of only lowercase English letters
 * - `dictionary` contains distinct words
 *
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 *
 */
const minExtraChar = function (s, dictionary) {
    const dictSet = new Set(dictionary); // Convert dictionary to a set for O(1) lookups
    const n = s.length;
    const dp = new Array(n + 1).fill(Infinity); // Initialize dp array with Infinity
    dp[0] = 0; // Base case: no extra characters before the string starts

    // Iterate over the string s
    for (let i = 1; i <= n; i++) {
        // Try every possible starting point j for substring s[j...i-1]
        for (let j = 0; j < i; j++) {
            const substring = s.slice(j, i);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]); // No extra characters for this substring
            } else {
                dp[i] = Math.min(dp[i], dp[j] + i - j); // Add extra characters
            }
        }
    }

    return dp[n]; // Minimum extra characters for the entire string
};

const s = 'leetscode',
    dictionary = ['leet', 'code', 'leetcode'];
// Output: 1
/* Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1. */
console.log(minExtraChar(s, dictionary));

const s1 = 'sayhelloworld',
    dictionary1 = ['hello', 'world'];
// Output: 3
/* Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3. */
console.log(minExtraChar(s1, dictionary1));
