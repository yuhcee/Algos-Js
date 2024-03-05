/**
 * **1750. Minimum Length of String After Deleting Similar Ends**
 *
 * Given a string `s` consisting only of characters `'a'`, `'b'`, and `'c'`.
 * You are asked to apply the following algorithm on the string any number
 * of times:
 *
 * 1. Pick a non-empty prefix from the string `s` where all the characters
 * in the prefix are equal.
 * 2. Pick a non-empty suffix from the string `s` where all the characters in
 * this suffix are equal.
 * 3. The prefix and the suffix should not intersect at any index.
 * 4. The characters from the prefix and suffix must be the same.
 * 5. Delete both the prefix and the suffix.
 *
 * Return the **minimum length** of s after performing the above operation
 * any number of times (possibly zero times).
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` only consists of characters `'a'`, `'b'`, and `'c'`.
 *
 * Returns the minimum length of string after deleting similar ends.
 * @param {string} s The input string consisting only of characters 'a',
 * 'b', and 'c'.
 * @return {number} The minimum length of string after deletion.
 */
const minimumLength = (s) => {
    let left = 0,
        right = s.length - 1;

    // While characters at left and right pointers are equal, move the pointers towards the center
    while (left < right && s[left] === s[right]) {
        let current = s[left];
        // Move the left pointer until it points to a different character
        while (left <= right && s[left] === current) left++;
        // Move the right pointer until it points to a different character
        while (left <= right && s[right] === current) right--;
    }

    // The minimum length is the difference between the right and left pointers plus 1
    return right - left + 1;
};

const s = 'ca';
// Output: 2
// Explanation: You can't remove any characters, so the string stays as is.
console.log(minimumLength(s));

const s1 = 'cabaabac';
// Output: 0
/* Explanation: An optimal sequence of operations is:
- Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
- Take prefix = "a" and suffix = "a" and remove them, s = "baab".
- Take prefix = "b" and suffix = "b" and remove them, s = "aa".
- Take prefix = "a" and suffix = "a" and remove them, s = "". */
console.log(minimumLength(s1));
