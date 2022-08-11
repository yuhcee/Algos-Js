/**
 * **30. Substring with Concatenation of All Words**
 *
 * You are given a string `s` and an array of strings `words`. All the strings of words are of **the same
 * length**.
 *
 * A **concatenated substring** in s is a substring that contains all the strings of any permutation of
 * `words` concatenated.
 *
 * - For example, if `words = ["ab","cd","ef"]`, then `"abcdef"`, `"abefcd"`, `"cdabef"`, `"cdefab"`,
 * `"efabcd"`, and `"efcdab"` are all concatenated strings. `"acdbef"` is not a concatenated substring
 * because it is not the concatenation of any permutation of `words`.
 *
 * Return *the starting indices of all the concatenated substrings in `s`. You can return the answer in
 * **any order**.
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var wordLength, totalCount;

let search = function (s, wordCounts, i, used, matched) {
    if (matched == totalCount) return true;
    if (i >= s.length) return false;

    var j,
        testStr = s.substr(i, wordLength);

    if (wordCounts.has(testStr)) {
        // we found the test...
        if (!used.has(testStr)) {
            // we haven't found it before
            used.set(testStr, 1);
        } else if (used.get(testStr) < wordCounts.get(testStr)) {
            // we have found it before, but we still have matches left
            used.set(testStr, used.get(testStr) + 1);
        } else {
            // we haven't any matches left for that word
            return false;
        }
        return search(s, wordCounts, i + wordLength, used, matched + 1); // continue searching
    }
    return false;
};

const findSubstring = function (s, words) {
    let wordCounts = new Map();

    // initialize wordCounts
    totalCount = 0;
    for (var word of w) {
        if (wordCounts.has(word)) wordCounts.set(word, wordCounts.get(word) + 1);
        else wordCounts.set(word, 1);
        totalCount++;
    }
    wordLength = w[0].length;

    let result = [];

    // search at every offset
    for (var i = 0; i < s.length; i++) {
        if (search(s, wordCounts, i, new Map(), 0)) {
            result.push(i);
        }
    }

    return result;
};
