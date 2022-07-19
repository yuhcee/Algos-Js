/**
 * **118. Pascal's Triangle**
 *
 * Given an integer `numRows`, return the first numRows of **Pascal's triangle**.
 *
 * In **Pascal's triangle**, each number is the sum of the two numbers directly above
 * it as shown:
 *
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    // initialize triangle with base case, first row is always 1
    const triangle = [[1]];

    // start row from 1
    for (let row = 1; row < numRows; row++) {
        // initialize currRow and get prevRow
        const currRow = [],
            prevRow = triangle[row - 1];
    }
};
