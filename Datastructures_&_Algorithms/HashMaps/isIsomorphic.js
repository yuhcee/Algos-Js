/**
 * **205. Isomorphic Strings**
 *
 * Given two strings `s` and `t`, *determine if they are isomorphic.*
 *
 * Two strings `s` and `t` are isomorphic if the characters in `s` can be
 * replaced to get `t`.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 5 * 104`
 * - `t.length == s.length`
 * - `s` and `t` consist of any valid ascii character.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if ((sMap.has(sChar) && sMap.get(sChar) !== tChar) || (tMap.has(tChar) && tMap.get(tChar) !== sChar)) {
            return false;
        }

        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
    }

    return true;
};

const s = 'egg',
    t = 'add';
// Output: true
console.log(isIsomorphic(s, t));

const s1 = 'foo',
    t1 = 'bar';
// Output: false
console.log(isIsomorphic(s1, t1));
