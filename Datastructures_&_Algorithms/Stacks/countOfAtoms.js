/**
 * **726. Number of Atoms**
 *
 * Given a string `formula` representing a chemical formula, return *the count of
 * each atom*.
 *
 * The atomic element always starts with an uppercase character, then zero or
 * more lowercase letters, representing the name.
 *
 * One or more digits representing that element's count may follow if the count
 * is greater than `1`. If the count is `1`, no digits will follow.
 *
 * - For example, `"H2O"` and `"H2O2"` are possible, but `"H1O2"` is impossible.
 *
 * Two formulas are concatenated together to produce another formula.
 *
 * - For example, `"H2O2He3Mg4"` is also a formula.
 *
 * A formula placed in parentheses, and a count (optionally added) is also a
 * formula.
 *
 * - For example, `"(H2O2)"` and `"(H2O2)3"` are formulas.
 *
 * Return the count of all elements as a string in the following form: the first
 * name (in sorted order), followed by its count (if that count is more than
 * `1`), followed by the second name (in sorted order), followed by its count (if
 * that count is more than `1`), and so on.
 *
 * The test cases are generated so that all the values in the output fit in a
 * **32-bit** integer.
 *
 * **Constraints:**
 *
 * - `1 <= formula.length <= 1000`
 * - `formula` consists of English letters, digits, `'('`, and `')'`.
 * - `formula` is always valid.
 *
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = function (formula) {
    const stack = [{}];
    let i = 0;
    const n = formula.length;

    while (i < n) {
        if (formula[i] === '(') {
            stack.push({});
            i++;
        } else if (formula[i] === ')') {
            const top = stack.pop();
            i++;
            let start = i;
            while (i < n && formula[i].match(/\d/)) {
                i++;
            }
            const multiplicand = start < i ? parseInt(formula.slice(start, i)) : 1;
            const currentDict = stack[stack.length - 1];
            for (const [element, count] of Object.entries(top)) {
                currentDict[element] = (currentDict[element] || 0) + count * multiplicand;
            }
        } else {
            let start = i;
            i++;
            while (i < n && formula[i].match(/[a-z]/)) {
                i++;
            }
            const element = formula.slice(start, i);
            start = i;
            while (i < n && formula[i].match(/\d/)) {
                i++;
            }
            const multiplicand = start < i ? parseInt(formula.slice(start, i)) : 1;
            const currentDict = stack[stack.length - 1];
            currentDict[element] = (currentDict[element] || 0) + multiplicand;
        }
    }

    const finalCount = stack[0];
    const sortedElements = Object.keys(finalCount).sort();
    let result = '';
    for (const element of sortedElements) {
        result += element + (finalCount[element] > 1 ? finalCount[element] : '');
    }

    return result;
};

const formula = 'H2O';
// Output: "H2O"
// Explanation: The count of elements are {'H': 2, 'O': 1}.
console.log(countOfAtoms(formula));

const formula1 = 'Mg(OH)2';
// Output: "H2MgO2"
// Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
console.log(countOfAtoms(formula1));

const formula2 = 'K4(ON(SO3)2)2';
// Output: "K4N2O14S4"
// Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
console.log(countOfAtoms(formula2));
