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
 */
function minExtraChar(s, dictionary) {
    // Create a DP array with the size of the string length + 1,
    // initialized to Infinity.
    // dp[i] represents the minimum number of extra characters
    // considering the first i characters of the string s.
    const dp = new Array(s.length + 1).fill(Infinity);

    // For the base case, if no characters are considered from string s,
    // then no extra characters are there.
    dp[0] = 0;

    // Loop through the string, for each index i
    for (let i = 0; i <= s.length; i++) {
        // For each word in the dictionary
        for (const w of dictionary) {
            // If the current word can be placed in s starting from index i
            if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
                // Update the DP array at the position where the word ends
                // to be the minimum of its current value or dp[i].
                // The intuition here is that if we can place the word starting from
                // index i, then the number of extra characters remains the same.
                dp[i + w.length] = Math.min(dp[i + w.length], dp[i]);
            }
        }

        // If we don't choose any word from the dictionary that starts at index i,
        // then we just increment the number of extra characters by 1 from the
        // previous count.
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }

    // Return the minimum number of extra characters for the entire string.
    return dp[s.length];
}
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
