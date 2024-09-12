/**
 * **1684. Count the Number of Consistent Strings**
 *
 * You are given a string `allowed` consisting of **distinct**
 * characters and an array of strings `words`. A string is
 * **consistent** if all characters in the string appear in the string
 * `allowed`.
 *
 * Return *the number of consistent strings in the array `words`*.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 104`
 * - `1 <= allowed.length <= 26`
 * - `1 <= words[i].length <= 10`
 * - The characters in `allowed` are **distinct**.
 * - `words[i]` and `allowed` contain only lowercase English letters.
 *
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
    // Step 1: Create a set of allowed characters for quick lookup
    const allowedSet = new Set(allowed);
    let count = 0;

    // Step 2: Iterate through each word in the words array
    for (let word of words) {
        // Step 3: Check if all characters in the word are in the allowed set
        let isConsistent = true;
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }

        // Step 4: If the word is consistent, increment the counter
        if (isConsistent) {
            count++;
        }
    }

    // Step 5: Return the total number of consistent strings
    return count;
};

const allowed = 'ab',
    words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
console.log(countConsistentStrings(allowed, words));

const allowed1 = 'abc',
    words1 = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
// Output: 7
// Explanation: All strings are consistent.
console.log(countConsistentStrings(allowed1, words1));

const allowed2 = 'cad',
    words2 = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'];
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
console.log(countConsistentStrings(allowed2, words2));
