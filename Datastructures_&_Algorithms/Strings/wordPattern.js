/**
 * **290. Word Pattern**
 *
 * Given a `pattern` and a string `s`, find if `s` follows the same
 * pattern.
 *
 * Here **follow** means a full match, such that there is a bijection
 * between a letter in `pattern` and a **non-empty** word in `s`.
 *
 * **Constraints:**
 *
 * - `1 <= pattern.length <= 300`
 * - `pattern` contains only lower-case English letters.
 * - `1 <= s.length <= 3000`
 * - `s` contains only lowercase English letters and spaces `' '`.
 * - `s` **does not contain** any leading or trailing spaces.
 * - All the words in `s` are separated by a **single space**.
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const splitStr = s.split(' ');
    if (splitStr.length !== pattern.length) return false;
    const hash = {};

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] in hash) {
            if (hash[pattern[i]] !== splitStr[i]) {
                return false;
            }
        } else if (Object.values(hash).indexOf(splitStr[i]) > -1) {
            return false;
        } else {
            hash[pattern[i]] = splitStr[i];
        }
    }

    return true;
};

const pattern = 'abba',
    s = 'dog cat cat dog';
// Output: true
console.log(wordPattern(pattern, s));

const pattern1 = 'abba',
    s1 = 'dog cat cat fish';
// Output: false
console.log(wordPattern(pattern1, s1));

const pattern2 = 'aaaa',
    s2 = 'dog cat cat dog';
// Output: false
console.log(wordPattern(pattern2, s2));
