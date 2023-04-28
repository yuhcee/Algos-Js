/**
 * **839. Similar String Groups**
 *
 * Two strings `X` and `Y`are similar if we can swap two letters (in different
 * positions) of `X`, so that it equals `Y`. Also two strings `X` and `Y` are similar
 * if they are equal.
 *
 * For example, `"tars"` and `"rats"` are similar (swapping at positions `0` and `2`),
 * and `"rats"` and `"arts"` are similar, but `"star"` is not similar to `"tars"`, `"rats"`, or `"arts"`.
 *
 * Together, these form two connected groups by similarity: `{"tars", "rats", "arts"}`
 * and `{"star"}`.  Notice that "tars" and "arts" are in the same group even though
 * they are not similar.  Formally, each group is such that a word is in the group if
 * and only if it is similar to at least one other word in the group.
 *
 * We are given a list `strs` of strings where every string in `strs` is an anagram of
 * every other string in `strs`. How many groups are there?
 *
 * **Constraints:**
 *
 * - `1 <= strs.length <= 300`
 * - `1 <= strs[i].length <= 300`
 * - `strs[i]` consists of lowercase letters only.
 * - All words in `strs` have the same length and are anagrams of each other.
 *
 * @param {string[]} strs
 * @return {number}
 */
const numSimilarGroups = function (strs) {
    const visited = new Set();
    let count = 0;

    for (let i = 0; i < strs.length; i++) {
        if (!visited.has(strs[i])) {
            dfs(strs, visited, strs[i]);
            count++;
        }
    }

    return count;
};

const dfs = (strs, visited, str) => {
    if (visited.has(str)) return;
    visited.add(str);

    for (let i = 0; i < strs.length; i++) {
        if (isSimilar(str, strs[i])) {
            dfs(strs, visited, strs[i]);
        }
    }
};

const isSimilar = (str1, str2) => {
    let diff = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 2) return false;
    }

    return true;
};

const strs = ['tars', 'rats', 'arts', 'star'];
// Output: 2
console.log(numSimilarGroups(strs));

const strs2 = ['omv', 'ovm'];
// Output: 1
console.log(numSimilarGroups(strs2));

