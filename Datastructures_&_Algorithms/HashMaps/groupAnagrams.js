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

        if (groups[charkey]) {
            groups[charkey].push(str);
        } else {
            groups[charkey] = [str];
        }
    }

    return Object.values(groups);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs));

const strs1 = [''];
// Output: [[""]]
console.log(groupAnagrams(strs1));

const strs2 = ['a'];
// Output: [["a"]]
console.log(groupAnagrams(strs2));
