/**
 * **916. Word Subsets**
 *
 * You are given two string arrays `words1` and `words2`.
 *
 * A string `b` is a **subset** of string `a` if every letter in `b` occurs in `a` including
 * multiplicity.
 *
 * - For example, `"wrr"` is a subset of `"warrior"` but is not a subset of `"world"`.
 *
 *  A string `a` from `words1` is universal if for every string `b` in `words2`, `b` is a subset of
 * `a`.
 * Return *an array of all the **universal** strings in `words1`. You may return the answer in
 * **any order**.
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    function counter(word) {
        let count = Array(26).fill(0);

        for (i = 0; i < word.length; i++) count[word.charCodeAt(i) - 97]++;
        return count;
    }

    let main = Array(26).fill(0),
        res = [],
        temp,
        i = 0;

    for (let w of words2) {
        temp = counter(w);
        for (i = 0; i < 26; i++) main[i] = Math.max(main[i], temp[i]);
    }

    for (let s of words1) {
        temp = counter(s);
        for (i = 0; i < 26; i++) if (main[i] > temp[i]) break;
        if (i == 26) res.push(s);
    }
    return res;
};
