/**
 * **792. Number of Matching Subsequences**
 *
 * Given a string `s` and an array of strings `words`, return *the number of `words[i]` that is a
 * subsequence of `s`*.
 *
 * A **subsequence** of a string is a new string generated from the original string with some
 * characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * - For example, "ace" is a subsequence of "abcde".
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => {
    // loop over each word in the words array
    // for a word to be a possible substring
    // of the relative order permutations of s
    // each letter in the word must also appear
    // sequentially, though not adjacently

    let matches = 0;

    for (const word of words) {
        let lastIndex = -1;
        let match = 0;

        for (const char of word) {
            // we can search for the position of the
            // current char using the lastIndex observed
            // as our starting point, which JS very
            // conveniently provides as a parameter of indexOf
            const currentIndex = s.indexOf(char, lastIndex + 1);

            // if the index of current char is greater than the last
            // index we observed, then the sequence persists and
            // we can continue
            if (currentIndex > lastIndex) {
                match++;
                lastIndex = currentIndex;
            } else {
                // otherwise, no such instance of the current char
                // exists after the last chars index
                break;
            }
        }
        // lastly, we know a valid subsequent is found if the
        // number of local matches found is equal to the length
        // of our word
        if (match == word.length) {
            matches++;
        }
    }
    return matches;
};

const s = 'abcde',
    words = ['a', 'bb', 'acd', 'ace'];
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
console.log(numMatchingSubseq(s, words));

const s1 = 'dsahjpjauf',
    words1 = ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'];
// Output: 2
console.log(numMatchingSubseq(s1, words1));
