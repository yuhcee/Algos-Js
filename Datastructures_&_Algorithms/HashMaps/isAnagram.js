/**
 * **242. Valid Anagram**
 *
 * Given two strings `s` and `t`, return `true` if `t` is an anagram of
 * `s`, and `false` otherwise.
 *
 * An **Anagram** is a word or phrase formed by rearranging the letters of
 * a different word or phrase, typically using all the original letters
 * exactly once.
 *
 * **Constraints:**
 *
 * - `1 <= s.length, t.length <= 5 * 104`
 * - `s` and `t` consist of lowercase English letters.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    // Count occurrences of characters in string s
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Update counts for characters in string t
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Character not in string s
        }
        charCount[char]--;
    }

    return true;
};

const s = 'anagram',
    t = 'nagaram';
// Output: true
console.log(isAnagram(s, t));

const s1 = 'rat',
    t1 = 'car';
// Output: false
console.log(isAnagram(s1, t1));
