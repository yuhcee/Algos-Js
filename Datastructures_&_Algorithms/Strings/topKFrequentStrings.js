/**
 * **692. Top K Frequent Words**
 *
 * Given an array of strings `words` and an integer `k`, return *the `k` most frequent strings*.
 *
 * Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the
 * same frequency by their **lexicographical order**.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 500`
 * - `1 <= words[i].length <= 10`
 * - `words[i]` consists of lowercase English letters.
 * - `k` is in the range `[1, The number of unique words[i]]`
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {};

const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
    k = 2;
// Output: ["i","love"]
/* Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order. */
console.log(topKFrequent(words, k));

const words1 = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    k1 = 4;
// Output: ["the","is","sunny","day"]
/* Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively. */
console.log(topKFrequent(words1, k1));
