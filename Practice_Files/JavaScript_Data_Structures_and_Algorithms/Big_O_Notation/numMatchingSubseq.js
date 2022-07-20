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
const numMatchingSubseq =  (s, words) =>{
    // loop over each word in the words array
    // for a word to be a possible substring
    // of the relative order permutations of s
    // each letter in the word must also appear
    // sequentially, though not adjacently

    let matches = 0;

    for (const word of words) {
    }
};
