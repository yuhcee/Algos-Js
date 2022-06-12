/**
 * **120. Triangle**
 *
 * Given a `triangle` array, return *the minimum path sum from top to bottom*.
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index
 * `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.
 *
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
    for (let i = triangle.length - 1; i > 0; i--) {
        const row = triangle[i];
        for (let j = 0; j < row.length - 1; j++) {
            triangle[i - 1][j] += Math.min(row[j], row[j + 1]);
        }
    }
    return triangle[0];
};

Input: triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// Output: 11
/* Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above). */
console.log(minimumTotal(triangle));
