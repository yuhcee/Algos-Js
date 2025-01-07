/**
 * **1408. String Matching in an Array**
 *
 * Given an array of string `words`, return all strings in `words` that is
 * a **substring** of another word. You can return the answer in **any
 * order**.
 *
 * A **substring** is a contiguous sequence of characters within a string
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length <= 30`
 * - `words[i]` contains only lowercase English letters.
 * - All the strings of `words` are **unique**.
 *
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {};

const words = ['mass', 'as', 'hero', 'superhero'];
// Output: ["as","hero"]
/* Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer. */
console.log(stringMatching(words));

const words1 = ['leetcode', 'et', 'code'];
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
console.log(stringMatching(words1));

const words2 = ['blue', 'green', 'bu'];
// Output: []
// Explanation: No string of words is substring of another string.
console.log(stringMatching(words2));
