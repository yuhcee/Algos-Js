/**
 * **2182. Construct String With Repeat Limit**
 *
 * You are given a string `s` and an integer `repeatLimit`. Construct a
 * new string `repeatLimitedString` using the characters of s such that no
 * letter appears **more than** `repeatLimit` times **in a row**. You do
 * not have to use all characters from `s`.
 *
 * Return *the **lexicographically largest** `repeatLimitedString`
 * possible*.
 *
 * A string a is **lexicographically larger** than a string `b` if in the
 * first position where `a` and `b` differ, string `a` has a letter that
 * appears later in the alphabet than the corresponding letter in `b`. If
 * the first `min(a.length, b.length)` characters do not differ, then the
 * longer string is the lexicographically larger one.
 *
 * **Constraints:**
 *
 * - `1 <= repeatLimit <= s.length <= 105`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
const repeatLimitedString = function (s, repeatLimit) {
    const counts = new Array(26).fill(0);
    for (const char of s) {
        counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let result = '';
    for (let i = 25; i >= 0; i--) {
        if (counts[i] === 0) continue;

        const char = String.fromCharCode(i + 'a'.charCodeAt(0));
        const repeatCount = Math.min(counts[i], repeatLimit);
        result += char.repeat(repeatCount);
        counts[i] -= repeatCount;

        while (counts[i] > 0) {
            // Key change: Use a while loop here
            let foundSmaller = false;
            for (let j = i - 1; j >= 0; j--) {
                if (counts[j] > 0) {
                    const nextChar = String.fromCharCode(j + 'a'.charCodeAt(0));
                    result += nextChar;
                    counts[j]--;
                    foundSmaller = true;
                    break;
                }
            }
            if (!foundSmaller) break; // No smaller character found
            const nextRepeat = Math.min(counts[i], repeatLimit);
            result += char.repeat(nextRepeat);
            counts[i] -= nextRepeat;
        }
    }

    return result;
};

const s = 'cczazcc',
    repeatLimit = 3;
// Output: "zzcccac"
/* Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
The letter 'a' appears at most 1 time in a row.
The letter 'c' appears at most 3 times in a row.
The letter 'z' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString. */
console.log(repeatLimitedString(s, repeatLimit));

const s1 = 'aababab',
    repeatLimit1 = 2;
// Output: "bbabaa"
/* Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa". 
The letter 'a' appears at most 2 times in a row.
The letter 'b' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString. */
console.log(repeatLimitedString(s1, repeatLimit1));
