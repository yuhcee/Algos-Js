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
        // initialize currRow with first element as always 1, and get prevRow
        const currRow = [1],
            prevRow = triangle[row - 1];

        // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.
        for (let col = 1; col < prevRow.length; col++) {
            currRow[col] = prevRow[col - 1] + prevRow[col];
        }

        // The last row element is always 1.
        currRow.add(1);
        triangle.push(currRow);
    }
    return triangle;
};
