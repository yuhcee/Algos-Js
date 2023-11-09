/**
 * **1759. Count Number of Homogenous Substrings**
 *
 * Given a string `s`, return *the number of **homogenous** substrings
 * of `s`. Since the answer may be too large, return it **modulo**
 * `109 + 7`.
 *
 * A string is **homogenous** if all the characters of the string are
 * the same.
 *
 * A **substring** is a contiguous sequence of characters within a
 * string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of lowercase letters.
 *
 * @param {string} s
 * @return {number}
 */
const countHomogenous = function (s) {
    const MOD = 1000000007; // We'll use this to keep our answer within the bounds
    let count = 0; // This will hold the total count of homogenous substrings
    let currentChar = ''; // This will keep track of the current character we're looking at
    let currentLength = 0; // This will keep track of the length of the current sequence of identical characters

    for (let i = 0; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentLength++; // If the character is the same as the current one, we increase the length
        } else {
            // If it's a different character, we first add the count of substrings from the previous sequence
            count = (count + (currentLength * (currentLength + 1)) / 2) % MOD;
            currentChar = s[i]; // Then we update the current character and length for the new sequence
            currentLength = 1; // Start at 1 since we have encountered a new character
        }
    }

    // After the loop, we need to add the count from the last sequence of identical characters
    count = (count + (currentLength * (currentLength + 1)) / 2) % MOD;

    return count; // Return the total count of homogenous substrings
};

const s = 'abbcccaa';
// Output: 13
/* Explanation: The homogenous substrings are listed as below:
"a"   appears 3 times.
"aa"  appears 1 time.
"b"   appears 2 times.
"bb"  appears 1 time.
"c"   appears 3 times.
"cc"  appears 2 times.
"ccc" appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13. */
console.log(countHomogenous(s));

const s1 = 'xy';
// Output: 2
// Explanation: The homogenous substrings are "x" and "y".
console.log(countHomogenous(s1));

const s2 = 'zzzzz';
// Output: 15
console.log(countHomogenous(s2));
