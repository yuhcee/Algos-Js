/**
 * **1106. Parsing A Boolean Expression**
 *
 * A **boolean expression** is an expression that evaluates to either
 * `true` or `false`. It can be in one of the following shapes:
 *
 * - `'t'` that evaluates to `true`.
 * - `'f'` that evaluates to `false`.
 * - `'!(subExpr)'` that evaluates to the **logical NOT** of the inner
 * expression `subExpr`.
 * - `'&(subExpr1, subExpr2, ..., subExprn)'` that evaluates to the
 * **logical AND** of the inner expressions `subExpr1, subExpr2, ...,
 * subExprn` where `n >= 1`.
 * - `'|(subExpr1, subExpr2, ..., subExprn)'` that evaluates to the
 * **logical OR** of the inner expressions `subExpr1, subExpr2, ...,
 * subExprn` where `n >= 1`.
 *
 * Given a string `expression` that represents a **boolean expression**,
 * return *the evaluation of that expression*.
 *
 * It is **guaranteed** that the given expression is valid and follows the
 * given rules.
 *
 * **Constraints:**
 *
 * - `1 <= expression.length <= 2 * 104`
 * - `expression[i]` is one following characters: '`(', ')', '&', '|',
 * '!', 't', 'f', and ','`.
 *
 * @param {string} expression
 * @return {boolean}
 */
const parseBoolExpr = function (expression) {
    let stack = [];

    for (let char of expression) {
        if (char === ',' || char === '(') {
            continue; // Ignore commas and opening parenthesis
        } else if (char === ')') {
            // Pop the current boolean values until we hit the operator
            let booleans = [];
            while (stack[stack.length - 1] !== '!' && stack[stack.length - 1] !== '&' && stack[stack.length - 1] !== '|') {
                booleans.push(stack.pop());
            }
            let operator = stack.pop(); // Pop the operator

            // Apply the operator to the boolean values
            if (operator === '!') {
                stack.push(booleans[0] === 'f' ? 't' : 'f');
            } else if (operator === '&') {
                stack.push(booleans.every((val) => val === 't') ? 't' : 'f');
            } else if (operator === '|') {
                stack.push(booleans.some((val) => val === 't') ? 't' : 'f');
            }
        } else {
            // Push everything else (t, f, !, &, |) onto the stack
            stack.push(char);
        }
    }

    // The result should be the only value left in the stack
    return stack[0] === 't';
};

const expression = '&(|(f))';
// Output: false
/* Explanation: 
First, evaluate |(f) --> f. The expression is now "&(f)".
Then, evaluate &(f) --> f. The expression is now "f".
Finally, return false. */
console.log(parseBoolExpr(expression));
