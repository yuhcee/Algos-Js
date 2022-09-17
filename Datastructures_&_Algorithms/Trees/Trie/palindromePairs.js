/**
 * **336. Palindrome Pairs**
 *
 * Given a list of **unique** words, return all the pairs of the ***distinct***
 * indices `(i, j)` in the given list, so that the concatenation of the two words
 * `words[i] + words[j]` is a palindrome.
 *
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = (words) => {
    const root = {};
    const output = [];

    const isPalindrome = (word) => {
        let L = 0;
        let R = word.length - 1;

        while (L < R) {
            if (word[L] != word[R]) return false;

            L++;
            R--;
        }

        return true;
    };

    const insertReversed = (words) => {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            let node = root;

            for (let j = word.length - 1; j >= 0; j--) {
                const char = word[j];

                if (!node[char]) node[char] = {};

                node = node[char];
            }

            node.isEnd = true;
            node.index = i;
        }
    };
};
