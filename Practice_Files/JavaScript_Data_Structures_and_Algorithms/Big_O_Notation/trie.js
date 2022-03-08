/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset
 * of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 *
 * Trie() Initializes the trie object.
 * void insert(String word) Inserts the string word into the trie.
 * boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise
 * boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and
 * false otherwise.
 *
 *
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 * Init Trie Class
 */
const Trie = function () {
    this.words = [];
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    this.words.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    this.words.includes(word);
};
