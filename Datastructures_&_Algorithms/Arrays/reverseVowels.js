/**
 * **345. Reverse Vowels of a String**
 *
 * Given a string `s`, reverse only all the vowels in the string and return it.
 *
 * The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more
 * than once.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 3 * 105`
 * - `s` consist of **printable ASCII** characters.
 *
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    // Set to keep track of all possible vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // right pointer starting at string length - 1
    // left pointer starting at 0
    // result is an array of characters
    let right = s.length - 1,
        left = 0,
        result = s.split('');

    while (left < right) {
        const leftChar = result[left],
            rightChar = result[right];
        // increment the left pointer by 1 if left index is not a vowel
        if (!vowels.has(leftChar)) left++;
        // decrement the right pointer by 1 if right index is not a vowel
        if (!vowels.has(rightChar)) right--;
        // if both left and right pointers are vowels swap the values
        // increment left and decrment right
        if (vowels.has(leftChar) && vowels.has(rightChar)) {
            [result[right], result[left]] = [result[left], result[right]];
            left++;
            right--;
        }
    }
    // join the result array
    return result.join('');
};

const s = 'hello';
// Output: 'holle';
console.log(reverseVowels(s));

const s1 = 'leetcode';
// Output: "leotcede"
console.log(reverseVowels(s1));
