/**
 * **2390. Removing Stars From a String**
 *
 * You are given a string `s`, which contains stars `*`.
 *
 * In one operation, you can:
 *
 * - Choose a star in `s`.
 * - Remove the closest **non-star** character to its **left**, as well as remove the star itself.
 *
 * Return *the string after **all** stars have been removed*.
 *
 * **Note:**
 *
 * - The input will be generated such that the operation is always possible.
 * - It can be shown that the resulting string will always be unique.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of lowercase English letters and stars *.
 * - The operation above can be performed on `s`.
 *
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
    const stack = []; // Initialize a stack to store the characters of the string s
    for (const c of s) {
        // Loop through the string s
        if (c === '*') {
            // If the current character is a star
            stack.pop(); // Remove the closest non-star character to its left
        } else {
            stack.push(c); // Otherwise, push the current character to the stack
        }
    }
    return stack.join(''); // Return the string formed by joining the characters in the stack
};

const s = 'leet**cod*e';
// Output: "lecoe"
/* Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe". */
console.log(removeStars(s));

const s2 = 'a*bc';
// Output: "bc"
/* Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 'a' in "a*bc". s becomes "*bc".
- The closest character to the 2nd star is 'b' in "*bc". s becomes "c".
There are no more stars, so we return "c". */
console.log(removeStars(s2));
