/**
 * **316. Remove Duplicate Letters**
 *
 * Given a string s, remove duplicate letters so that every letter appears
 * once and only once. You must make sure your result is the smallest in
 * lexicographical order among all possible results.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
    if (!s || s.length === 0) return '';

    // Create an array to keep track of the remaining count of each character
    const remaining = new Array(26).fill(0);
    for (let char of s) {
        remaining[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const stack = [];
    const inStack = new Array(26).fill(false);

    for (let char of s) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        // Decrement the remaining count of the current character
        remaining[idx]--;

        // If the character is already in the stack, continue
        if (inStack[idx]) continue;

        // Check if the current character is smaller than the top of the stack
        // and if the top character will appear later in the string
        while (stack.length && char < stack[stack.length - 1] && remaining[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            inStack[stack.pop().charCodeAt(0) - 'a'.charCodeAt(0)] = false;
        }

        stack.push(char);
        inStack[idx] = true;
    }

    return stack.join('');
};

const s = 'bcabc';
// Output: "abc"
console.log(removeDuplicateLetters(s));
