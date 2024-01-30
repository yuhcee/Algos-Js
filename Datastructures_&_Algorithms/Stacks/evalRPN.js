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
 *
 */
/* let operators = {
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
}; */

/* const evalRPN = function (tokens) {
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
}; */

const evalRPN = (tokens) => {
    const stack = [];
    const operators = new Set(['+', '/', '-', '*']);

    for (let token of tokens) {
        if (operators.has(token)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                case '-':
                    result = Math.trunc(operand1 - operand2); // Division truncates toward zero
                case '/':
                    result = operand1 / operand2;
                case '*':
                    result = operand1 * operand2;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(token)); // Convert to integer and push onto stack
        }
    }
};

const tokens = ['2', '1', '+', '3', '*'];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
console.log(evalRPN(tokens));

const tokens1 = ['4', '13', '5', '/', '+'];
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
console.log(evalRPN(tokens1));

const tokens2 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
// Output: 22
/* Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22 */
console.log(evalRPN(tokens2));
