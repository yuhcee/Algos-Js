/**
 * **416. Sum of Prefix Scores of Strings**
 *
 * You are given an array `words` of size `n` consisting of **non-empty**
 * strings.
 *
 * We define the **score** of a string `term` as the **number** of strings
 * `words[i]` such that `term` is a **prefix** of `words[i]`.
 *
 * For example, if `words = ["a", "ab", "abc", "cab"]`, then the score of
 * `"ab"` is `2`, since `"ab"` is a prefix of both `"ab"` and `"abc"`.
 *
 * Return *an array `answer` of size `n` where `answer[i]` is the **sum**
 * of scores of every **non-empty** prefix of `words[i]`*.
 *
 * **Note** that a string is considered as a prefix of itself.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 1000`
 * - `1 <= words[i].length <= 1000`
 * - `words[i]` consists of lowercase English letters.
 *
 * @param {string[]} words
 * @return {number[]}
 */
const sumPrefixScores = function (words) {};

class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0; // Keeps track of how many words have this prefix
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count += 1; // Increment the count for this prefix
        }
    }

    // Get the sum of prefix scores for a word
    getPrefixScore(word) {
        let node = this.root;
        let score = 0;
        for (let char of word) {
            if (node.children[char]) {
                node = node.children[char];
                score += node.count; // Add the count of this prefix
            }
        }
        return score;
    }
}
