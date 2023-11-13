/**
 * **2785. Sort Vowels in a String**
 *
 * Given a **0-indexed** string `s`, **permute** `s` to get a new
 * string `t` such that:
 *
 * - All consonants remain in their original places. More formally, if
 * there is an index `i` with `0 <= i < s.length` such that `s[i]` is
 * a consonant, then `t[i] = s[i]`.
 *
 * - The vowels must be sorted in the **nondecreasing** order of their
 * **ASCII** values. More formally, for pairs of indices `i`, `j` with
 * `0 <= i < j < s.length` such that `s[i]` and `s[j]` are vowels,
 * then `t[i]` must not have a higher ASCII value than `t[j]`.
 *
 * Return *the resulting string*.
 *
 * The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can
 * appear in lowercase or uppercase. Consonants comprise all letters
 * that are not vowels.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists only of letters of the English alphabet in
 * **uppercase** and **lowercase**.
 *
 * @param {string} s
 * @return {string}
 */
const sortVowels = function (s) {
    // Define vowels
    const vowels = 'aeiouAEIOU';

    // Extract vowels from the string and sort them
    const sortedVowels = s
        .split('')
        .filter((char) => vowels.includes(char))
        .sort();

    // Initialize an index for the sorted vowels
    let vowelIndex = 0;

    // Construct the new string
    let result = s
        .split('')
        .map((char) => {
            // If the character is a vowel, replace it with the next sorted vowel
            if (vowels.includes(char)) {
                return sortedVowels[vowelIndex++];
            }
            // If it's a consonant, keep it as is
            return char;
        })
        .join('');

    return result;
};
