/**
 * **168. Excel Sheet Column Title**
 *
 * Given an integer `columnNumber`, return *its corresponding column title as
 * it appears in an Excel sheet*.
 *
 * For example:
 *
 * ```
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 * ```
 * **Constraints:**
 *
 * - `1 <= columnNumber <= 231 - 1`
 *
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        // Get the remainder when divided by 26
        let remainder = (columnNumber - 1) % 26;

        // Convert the remainder to a letter (A = 0, B = 1, ...)
        let char = String.fromCharCode(65 + remainder);

        // Add the letter to the result
        result = char + result;

        // Subtract the remainder from the column number
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result;
};

const columnNumber = 1;
// Output: "A"
console.log(convertToTitle(columnNumber));

const columnNumber1 = 28;
// Output: "AB"
console.log(convertToTitle(columnNumber1));
