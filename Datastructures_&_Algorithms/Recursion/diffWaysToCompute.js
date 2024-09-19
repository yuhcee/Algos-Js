/**
 * **241. Different Ways to Add Parentheses**
 *
 * Given a string `expression` of numbers and operators, return *all
 * possible results from computing all the different possible ways to
 * group numbers and operators*. You may return the answer in **any
 * order**.
 *
 * The test cases are generated such that the output values fit in a
 * 32-bit integer and the number of different results does not exceed
 * `104`.
 *
 * **Constraints:**
 *
 * - `1 <= expression.length <= 20`
 * - `expression` consists of digits and the operator `'+'`, `'-'`, and
 * `'*'`.
 * - All the integer values in the input expression are in the range `[0,
 * 99]`.
 * - The integer values in the input expression do not have a leading
 * `'-'` or `'+'` denoting the sign.
 *
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = function (expression) {
    const memo = {};

    const compute = (exp) => {
        if (memo[exp] !== undefined) {
            return memo[exp];
        }

        let res = [];
        // Iterate through the expression to find operators
        for (let i = 0; i < exp.length; i++) {
            const char = exp[i];
            if (char === '+' || char === '-' || char === '*') {
                // Split the expression at the current operator
                const left = compute(exp.slice(0, i));
                const right = compute(exp.slice(i + 1));

                // Combine results from left and right sub-expressions
                for (let l of left) {
                    for (let r of right) {
                        if (char === '+') {
                            res.push(l + r);
                        } else if (char === '-') {
                            res.push(l - r);
                        } else if (char === '*') {
                            res.push(l * r);
                        }
                    }
                }
            }
        }

        // Base case: if there are no operators, the expression is a number
        if (res.length === 0) {
            res.push(parseInt(exp));
        }

        memo[exp] = res;
        return res;
    };

    return compute(expression);
};

const expression = '2-1-1';
// Output: [0,2]
/* Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2 */
console.log(diffWaysToCompute(expression));
