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
