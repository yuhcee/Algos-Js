/**
 * **49. Group Anagrams**
 *
 * Given an array of strings `strs`, group the **anagrams together**. You can return
 * the answer in **any order**.
 *
 * An **Anagram** is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly once.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const groups = {};

    for (let str of strs) {
        let charkey = str.split('').sort().join('');

        if (group[charkey]) {
            group[charkey].push(str);
        } else {
            groupAnagrams[charkey] = [str];
        }
    }

    return Object.values(groups);
};
