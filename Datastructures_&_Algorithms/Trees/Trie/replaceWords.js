/**
 * **648. Replace Words**
 *
 * In English, we have a concept called **root**, which can be followed by some
 * other word to form another longer word - let's call this word **derivative**.
 * For example, when the **root** `"help"` is followed by the word `"ful"`, we
 * can form a derivative `"helpful"`.
 *
 * Given a `dictionary` consisting of many **roots** and a `sentence` consisting
 * of words separated by spaces, replace all the derivatives in the sentence
 * with the root forming it. If a derivative can be replaced by more than one
 * **root**, replace it with the root that has the **shortest length**.
 *
 * Return *the `sentence` after the replacement*.
 *
 * **Constraints:**
 *
 * - `1 <= dictionary.length <= 1000`
 * - `1 <= dictionary[i].length <= 100`
 * - `dictionary[i]` consists of only lower-case letters.
 * - `1 <= sentence.length <= 106`
 * - `sentence` consists of only lower-case letters and spaces.
 * - The number of words in `sentence` is in the range `[1, 1000]`
 * - The length of each word in `sentence` is in the range `[1, 1000]`
 * - Every two consecutive words in `sentence` will be separated by exactly one
 * space.
 * - `sentence` does not have leading or trailing spaces.
 *
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    searchRoot(word) {
        let node = this.root;
        let prefix = '';
        for (let char of word) {
            if (node.isEndOfWord) {
                return prefix;
            }
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
            prefix += char;
        }
        return node.isEndOfWord ? prefix : null;
    }
}

const replaceWords = function (dictionary, sentence) {
    let trie = new Trie();

    // Insert all roots into the Trie
    for (let root of dictionary) {
        trie.insert(root);
    }

    let words = sentence.split(' ');

    // Replace words with their shortest root form
    for (let i = 0; i < words.length; i++) {
        let root = trie.searchRoot(words[i]);
        if (root !== null) {
            words[i] = root;
        }
    }

    return words.join(' ');
};

const dictionary = ['cat', 'bat', 'rat'],
    sentence = 'the cattle was rattled by the battery';
// Output: "the cat was rat by the bat"
console.log(replaceWords(dictionary, sentence));
