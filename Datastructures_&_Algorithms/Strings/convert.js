/**
 * **6. Zigzag Conversion**
 *
 * The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 * ```
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * ```
 *
 * And then read line by line: `"PAHNAPLSIIGYIR"`
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * ```
 * string convert(string s, int numRows);
 *
 * ```
 * **Constraints:**
 *
 * - `1 <= s.length <= 1000`
 * - `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
 * - `1 <= numRows <= 1000`
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows === 1 || numRows >= s.length) return s; // if numRows is 1 or greater than string length, return the string as is

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = []; // initialize empty arrays for each row
    }

    let row = 0,
        direction = -1;
    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i]);
        if (row === 0 || row === numRows - 1) direction *= -1; // change direction when reaching first or last row
        row += direction;
    }

    return rows.reduce((res, row) => res + row.join(''), ''); // join each row and concatenate to result string
};

const s = 'PAYPALISHIRING',
    numRows = 3;
// Output: "PAHNAPLSIIGYIR"
console.log(convert(s, numRows));

const s1 = 'PAYPALISHIRING',
    numRows1 = 4;
// Output: "PINALSIGYAHRPI"
/* Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I */
console.log(convert(s1, numRows1));

const s2 = 'A',
    numRows2 = 1;
// Output: "A"
console.log(convert(s2, numRows2));
