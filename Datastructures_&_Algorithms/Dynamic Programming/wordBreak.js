/**
 * **139. Word Break**
 *
 * Given a string `s` and a dictionary of strings `wordDict`, return true if s can
 * be segmented into a space-separated sequence of one or more dictionary words.
 *
 * **Note** that the same word in the dictionary may be reused multiple times in the
 * segmentation.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 300`
 * - `1 <= wordDict.length <= 1000`
 * - `1 <= wordDict[i].length <= 20`
 * - `s` and `wordDict[i]` consist of only lowercase English letters.
 * - All the strings of `wordDict` are **unique**.
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
    // Create a set to store the words in the wordDict for faster lookup
    const wordSet = new Set(wordDict);

    // Create an array to store the DP results for each index in the string
    // dp[i] will be true if s[0...i] can be segmented into words from wordDict
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Empty string can always be segmented

    // Iterate through the string characters
    for (let i = 1; i <= s.length; i++) {
        // For each index i, check if s[0...i] can be segmented into words
        // by checking all possible substrings s[j...i] (where j goes from 0 to i-1)
        for (let j = 0; j < i; j++) {
            // Check if the substring s[j...i] can be segmented and s[j...i] is present in wordDict
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                // If both conditions are met, set dp[i] to true and break the loop
                dp[i] = true;
                break;
            }
        }
    }

    // dp[s.length] will hold the result for the entire string s
    return dp[s.length];
};

const s = 'leetcode',
    wordDict = ['leet', 'code'];
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
console.log(wordBreak(s, wordDict));

const s1 = 'applepenapple',
    wordDict1 = ['apple', 'pen'];
// Output: true
/* Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word. */
console.log(wordBreak(s1, wordDict1));

const s2 = 'catsandog',
    wordDict2 = ['cats', 'dog', 'sand', 'and', 'cat'];
// Output: false
console.log(wordBreak(s2, wordDict2));
