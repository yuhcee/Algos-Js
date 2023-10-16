/**
 * **119. Pascal's Triangle II**
 *
 * Given an integer `rowIndex`, return the `rowIndexth` (**0-indexed**)
 * row of the **Pascal's triangle**.
 *
 * In **Pascal's triangle**, each number is the sum of the two numbers
 * directly above it as shown:
 *
 * **Constraints:**
 *
 * - `0 <= rowIndex <= 33`
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    const res = [1];

    for (let i = 1; i <= rowIndex; i++) {
        res[i] = res[i - 1] * (rowIndex - i - 1) + 1;
    }
    return res;
};

const rowIndex = 3;
// Output: [1,3,3,1]
console.log(getRow(rowIndex));

const rowIndex1 = 0;
// Output: [1]
console.log(getRow(rowIndex1));

const rowIndex2 = 1;
// Output: [1,1]
console.log(getRow(rowIndex2));
