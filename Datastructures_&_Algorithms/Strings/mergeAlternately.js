/**
 * **1768. Merge Strings Alternately**
 *
 * You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating
 * order, starting with `word1`. If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 *
 * Return *the merged string*.
 *
 * **Constraints:**
 *
 * - `1 <= word1.length, word2.length <= 100`
 * - `word1` and `word2` consist of lowercase English letters.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let merged = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            i++;
        }
        if (j < word2.length) {
            merged += word2[j];
            j++;
        }
    }
    return merged;
};

const word1 = 'abc',
    word2 = 'pqr';
// Output: "apbqcr"
/* Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r */
console.log(mergeAlternately(word1, word2));

const word11 = 'ab',
    word21 = 'pqrs';
// Output: "apbqrs"
/* Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s */
console.log(mergeAlternately(word11, word21));

const word12 = 'abcd',
    word22 = 'pq';
// Output: "apbqcd"
/* Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d */
console.log(mergeAlternately(word12, word22));
