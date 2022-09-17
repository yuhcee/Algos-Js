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
};
