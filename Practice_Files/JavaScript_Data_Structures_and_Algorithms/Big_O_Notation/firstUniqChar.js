/**
 * **387. First Unique Character in a String**
 *
 * Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not
 * exist, return -1.
 *
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s[i];

        if (s.indexOf(char) === s.lastIndexOf(char)) return i;
    }

    return -1;
};

const s = 'leetcode';
// Output: 0
console.log(firstUniqChar(s));
