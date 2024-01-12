/**
 * **1704. Determine if String Halves Are Alike**
 *
 * You are given a string `s` of even length. Split this string into two halves of equal lengths, and let `a` be
 * the first half and `b` be the second half.
 *
 * Two strings are **alike** if they have the same number of vowels (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `'A'`,
 * `'E'`, `'I'`, `'O'`, `'U'`). Notice that `s` contains uppercase and lowercase letters.
 *
 * Return `true` if `a` and `b` are alike. Otherwise, return `false`.
 *
 * **Constraints:**
 *
 * - `2 <= s.length <= 1000`
 * - `s.length` is even.
 * - `s` consists of uppercase and lowercase letters.
 *
 * @param {string} s
 * @return {boolean}
 */
const countVowels = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;

    for (let char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
};
/**
 * Determine if two halves of a string are alike based on the count of vowels
 * @param {string} s - The input string of even length
 * @return {boolean} - True if the two halves are alike, false otherwise
 */
const halvesAreAlike = (s) => {
    const halfLength = s.length / 2;
    const firstHalf = s.substring(0, halfLength);
    const secondHalf = s.substring(halfLength);

    const countFirstHalf = countVowels(firstHalf);
    const countSecondHalf = countVowels(secondHalf);

    return countFirstHalf === countSecondHalf;
};

const s = 'book';
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
console.log(halvesAreAlike(s));

const s1 = 'textbook';
// Output: false
/* Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice. */
console.log(halvesAreAlike(s1));

const s2 = 'leetcode';
console.log(halvesAreAlike(s2));
