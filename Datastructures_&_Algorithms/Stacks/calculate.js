/**
 * **224. Basic Calculator**
 *
 * Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return *
 * the result of the evaluation*.
 *
 * *Note*: You are not allowed to use any built-in function which evaluates strings as mathematical expressions,
 * such as `eval()`.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 3 * 105`
 * - `s` consists of digits, `'+'`, `'-'`, `'('`, `')'`, and `' '`.
 * - `s` represents a valid expression.
 * - `'+'` is not used as a unary operation (i.e., `"+1"` and `"+(2 + 3)"` is invalid).
 * - `'-'` could be used as a unary operation (i.e., `"-1"` and `"-(2 + 3)"` is valid).
 * - There will be no two consecutive operators in the input.
 * - Every number and running calculation will fit in a signed 32-bit integer.
 *
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
    s = s.replace(/ /g, '');
    const array = [];
    let res = 0;
    let sign = 1;
    let num = '';

    for (let i = 0; i < s.length; i++) {
        num = '';
        while (s[i] >= '0' && s[i] <= '9') {
            num = num + s[i];
            i++;
        }
        res += sign * Number(num);

        switch (s[i]) {
            case '+':
                sign = 1;
                break;
            case '-':
                sign = '-1';
                break;
            case '(':
                array.push(res);
                array.push(sign);
                res = 0;
                sign = 1;
                break;
            case ')':
                res = array.pop() * res;
                res += array.pop();
                break;
        }
    }

    return res;
};

const s = '1 + 1';
// Output: 2
console.log(calculate(s));

const s1 = ' 2-1 + 2 ';
// Output: 3
console.log(calculate(s1));

const s2 = '(1+(4+5+2)-3)+(6+8)';
// Output: 23
console.log(calculate(s2));
