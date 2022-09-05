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

// Using Dynamic Programming
/* function longestValidParentheses(s) {
    // maxLength variable is used to monitor the maximum length of the valid substring
    // every time we fall in condition a. or b.
    // by using it we don't need to find the maximum value in the resulting dp array
    let maxLength = 0;
    let dp = new Array(s.length).fill(0);

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') {
            // - condition a.
            dp[i] = 2 + (dp[i - 2] || 0); // - dp[i-2] can return undefined, if so we will add zero instead
            maxLength = Math.max(maxLength, dp[i]);
        }
        if (
            s[i - 1] === ')' &&
            s[i] === ')' &&
            s[i - dp[i - 1] - 1] === '(' // - condition b.
        ) {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
} */

const s = '(()';
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
console.log(longestValidParentheses(s));
const s1 = ')()())';
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
console.log(longestValidParentheses(s1));
