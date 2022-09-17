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

    // empty string forms palindrome w/ every palindrome in the list
    const handleEmptyString = (root) => {
        if (root.isEnd) {
            for (let i = 0; i < words.length; i++) {
                const validPalindrome = isPalindrome(words[i]);

                if (root.index === i) continue;
                if (validPalindrome) output.push([i, root.index]);
            }
        }
    };

    // case 2: if word shorter - get last prefix node given the word
    // case 3: if word longer - check if suffix is valid palindrome, if not stop
    const getLastPrefixNode = (word, i) => {
        let node = root;

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            const child = node[char];

            // case 3: word is longer
            // check if rest of the word form valid palindrome
            if (!child) return;
            if (child.isEnd && child.index !== i && j < word.length - 1) {
                const suffix = word.slice(j + 1);
                const validSuffix = isPalindrome(suffix);

                if (validSuffix) output.push([i, child.index]);
            }

            node = node[char];
        }

        return node;
    };

    // starting from lastPrefixNode find valid palindromes AND traverse Trie
    const findPalindromes = (node, suffix, i) => {
        // case 1. same word length
        if (node.isEnd && node.index !== i) {
            const validSuffix = isPalindrome(suffix);

            if (validSuffix) output.push([i, node.index]);
        }

        // case 2. word is shorter
        for (const char in node) {
            findPalindromes(node[char], suffix + char, i);
        }
    };
};
