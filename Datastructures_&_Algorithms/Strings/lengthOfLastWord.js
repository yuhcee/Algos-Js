/**
 * **58. Length of Last Word**
 *
 * Given a string `s` consisting of words and spaces, return the length of the
 * **last** word in the string.*
 *
 * A **word** is a maximal substring consisting of non-space characters only.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s` consists of only English letters and spaces `' '`.
 * - There will be at least one word in `s`.
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    // Trim any leading or trailing spaces
    s = s.trim();

    // Initialize a variable to store the length of the last word
    let length = 0;

    // Iterate through the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        // Break the loop when a space is encountered after finding the last word
        if (s[i] === ' ') {
            break;
        }
        // Increment the length for each character of the last word
        length++;
    }

    // Return the length of the last word
    return length;
};

const s = 'Hello World';
// Output: 5
// Explanation: The last word is "World" with length 5.
console.log(lengthOfLastWord(s));
