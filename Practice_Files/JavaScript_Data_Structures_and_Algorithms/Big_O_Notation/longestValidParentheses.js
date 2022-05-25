/**
 * **32. Longest Valid Parentheses**
 *
 * Given a string containing just the characters `'('` and `')'`, find the length of the
 * longest valid (well-formed) parentheses substring.
 *
 * @param {string} s
 * @return {number}
 */

// Using Stack
const longestValidParentheses = (s) => {
    let max = 0,
        stack = [];
    stack.push(-1);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack.at(-1));
            }
        }
    }
    return max;
};

const s = '(()';
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
console.log(longestValidParentheses(s));
const s1 = ')()())';
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
console.log(longestValidParentheses(s1));
