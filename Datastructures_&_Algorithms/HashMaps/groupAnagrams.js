/**
 * **49. Group Anagrams**
 *
 * Given an array of strings `strs`, group the **anagrams together**.
 * You can return the answer in **any order**.
 *
 * An **Anagram** is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 *
 * **Constraints:**
 *
 * - `1 <= strs.length <= 104`
 * - `0 <= strs[i].length <= 100`
 * - `strs[i]` consists of lowercase English letters.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
/* const groupAnagrams = function (strs) {
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
}; */

const groupAnagrams = (strs) => {
    const groups = new Map();

    for (let str of strs) {
        let charKey = str.split('').sort().join('');

        if (!groups.has(charKey)) {
            groups.set(charKey, []);
        }

        groups.get(charKey).push(str);
    }

    return Array.from(groups.values());
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
