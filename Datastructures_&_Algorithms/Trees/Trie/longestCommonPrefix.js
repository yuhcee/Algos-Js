/**
 * **3043. Find the Length of the Longest Common Prefix**
 *
 * You are given two arrays with **positive** integers arr1 and arr2.
 *
 * A **prefix** of a positive integer is an integer formed by one or more
 * of its digits, starting from its **leftmost** digit. For example, `123`
 * is a prefix of the integer `12345`, while `234` is **not**.
 *
 * A **common prefix** of two integers `a` and `b` is an integer `c`, such
 * that `c` is a prefix of both `a` and `b`. For example, `5655359` and
 * `56554` have a common prefix `565` while `1223` and `43456` **do not**
 * have a common prefix.
 *
 * You need to find the length of the **longest common prefix** between
 * all pairs of integers `(x, y)` such that `x` belongs to `arr1` and `y`
 * belongs to `arr2`.
 *
 * Return *the length of the **longest** common prefix among all pairs. If
 * no common prefix exists among them, return `0`*.
 *
 * **Constraints:**
 *
 * - `1 <= arr1.length, arr2.length <= 5 * 104`
 * - `1 <= arr1[i], arr2[i] <= 108`
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = function (arr1, arr2) {
    // Step 1: Build the Trie with the elements of arr1
    const trie = new Trie();
    for (let num of arr1) {
        trie.insert(num);
    }

    let maxLength = 0;

    // Step 2: Find the longest common prefix in arr2
    for (let num of arr2) {
        maxLength = Math.max(maxLength, trie.getLongestPrefix(num));
    }

    return maxLength;
};

class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(number) {
        let node = this.root;
        const str = number.toString();
        for (let char of str) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
    }

    getLongestPrefix(number) {
        let node = this.root;
        const str = number.toString();
        let i = 0;
        while (i < str.length && node.children[str[i]]) {
            node = node.children[str[i]];
            i++;
        }
        return i; // Length of the longest prefix
    }
}
