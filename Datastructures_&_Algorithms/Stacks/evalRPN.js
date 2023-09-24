/**
 * **150. Evaluate Reverse Polish Notation**
 *
 * You are given an array of strings `tokens` that represents an
 * arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return *an integer that represents the value
 * of the expression*.
 *
 * **Note** that:
 *
 * - The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
 * - Each operand may be an integer or another expression.
 * - The division between two integers always **truncates toward zero**.
 * - There will not be any division by zero.
 * - The input represents a valid arithmetic expression in a reverse
 * polish notation.
 * - The answer and all the intermediate calculations can be represented
 * in a **32-bit** integer.
 *
 * **Constraints:**
 *
 * - `1 <= tokens.length <= 104`
 * - `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or
 * an integer in the range `[-200, 200]`.
 *
 * @param {string[]} tokens
 * @return {number}
 */
let operators = {
    '+': function add(a, b) {
        return a + b;
    },
    '-': function sub(a, b) {
        return a - b;
    },
    '*': function mul(a, b) {
        return a * b;
    },
    '/': function div(a, b) {
        let result = a / b;
        if (result < 0) {
            return Math.ceil(result);
        } else return Math.floor(result);
    },
};
const evalRPN = function (tokens) {
    let result = 0;
    let stack1 = [];
    while (tokens.length > 0) {
        let item = tokens.shift();
        if (operators[item]) {
            let b = parseInt(stack1.pop());
            let a = parseInt(stack1.pop());
            result = operators[item](a, b);
            stack1.push(result);
        } else {
            stack1.push(item);
        }
    }
    return stack1.pop();
};

const tokens = ['2', '1', '+', '3', '*'];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
console.log(evalRPN(tokens));
