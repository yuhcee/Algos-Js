/**
 * **387. First Unique Character in a String**
 *
 * Given a string `s`, *find the first non-repeating character in it and return
 * its index*. If it does not exist, return -1.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of only lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
/* const firstUniqChar = (s) => {
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s[i];

        if (s.indexOf(char) === s.lastIndexOf(char)) return i;
    }

    return -1;
}; */

const firstUniqChar = (s) => {
    const frequencyMap = new Map();

    // Populate the frequency map
    for (let char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (frequencyMap.get(s[i]) === 1) {
            return i;
        }
    }

    // If no non-repeating character is found, return -1
    return -1;
};

const s = 'leetcode';
// Output: 0
console.log(firstUniqChar(s));

const s1 = 'loveleetcode';
// Output: 2
console.log(firstUniqChar(s1));

const s2 = 'aabb';
// Output: -1
console.log(firstUniqChar(s2));
