/**
 * **745. Prefix and Suffix Search**
 * Design a special dictionary with some words that searchs the words in it by a prefix and a
 * suffix.
 *
 * Implement the WordFilter class:
 *
 * - `WordFilter(string[] words)` Initializes the object with the `words` in the dictionary.
 * - `f(string prefix, string suffix)` Returns *the index of the word in the dictionary*, which
 * has the prefix `prefix` and the suffix `suffix`. If there is more than one valid index,
 * return **the largest** of them. If there is no such word in the dictionary, return `-1`.
 *
 * @param {string[]} words
 */
const WordFilter = (words) => {
    this.trie = new Map();

    for (let i = 0; i < words.length; i++) {
        const word = words[i],
            len = word.length;

        for (let j = 0; j < len; j++) {
            const prefix = word.slice(0, j + 1);
            for (let k = 0; k < len; k++) {
                const suffix = word.slice(k);
                this.trie.set(prefix + '#' + suffix, i);
            }
        }
    }
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {};
/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
