/**
 * **Multiple Brackets**
 *
 * Have the function `MultipleBrackets(str)` take the `str` parameter being passed and return
 * `1  #ofBrackets` if the brackets are correctly matched and each one is accounted for.
 * Otherwise return 0.
 *
 * For example: if `str` is `"(hello [world])(!)"`, then the output should be `1 3` because all
 * the brackets are matched and there are 3 **pairs of brackets**, but if `str` is `"((hello
 * [world])"` the the output should be `0` because the brackets do not correctly match up. Only
 * "(", ")", "[", and "]" will be used as brackets.
 *
 * If `str` contains no brackets return `1`.
 *
 * @param {string} str
 * @return {string}
 */
function MultipleBrackets(str) {
    const stack = [];
    let numBrackets = 0;
    const map = {
        '(': ')',
        '[': ']',
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === ']') {
            const openingBracket = stack.pop();

            if (map[openingBracket] === char) {
                numBrackets++;
            } else {
                return '0';
            }
        }
    }

    return `1 ${numBrackets}`;
}