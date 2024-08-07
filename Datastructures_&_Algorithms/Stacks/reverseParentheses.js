/**
 * **1190. Reverse Substrings Between Each Pair of Parentheses**
 *
 * You are given a string `s` that consists of lower case English letters and
 * brackets.
 *
 * Reverse the strings in each pair of matching parentheses, starting from the
 * innermost one.
 *
 * Your result should not contain any brackets.
 *
 * **Constraints:**
 * 
 * - `1 <= s.length <= 2000`
 * - `s` only contains lower case English characters and parentheses.
 * - It is guaranteed that all parentheses are balanced.

 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function (s) {
    let stack = [];

    for (let char of s) {
        if (char === ')') {
            let queue = [];
            while (stack[stack.length - 1] !== '(') {
                queue.push(stack.pop());
            }
            stack.pop(); // Remove the '('
            while (queue.length) {
                stack.push(queue.shift());
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

const s = '(abcd)';
// Output: "dcba"
console.log(reverseParentheses(s));

const s1 = '(u(love)i)';
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
console.log(reverseParentheses(s1));

const s2 = '(ed(et(oc))el)';
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
console.log(reverseParentheses(s2));
