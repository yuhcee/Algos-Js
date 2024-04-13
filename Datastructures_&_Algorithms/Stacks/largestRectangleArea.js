/**
 * **85. Maximal Rectangle**
 *
 * Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the
 * largest rectangle containing only `1`'s and return *its area.*
 *
 * **Constraints:**
 *
 * - `rows == matrix.length`
 * - `cols == matrix[i].length`
 * - `1 <= row, cols <= 200`
 * - `matrix[i][j] is '0' or '1'.`
 *
 * @param {character[][]} matrix
 * @return {number}
 *
 */
const maximalRectangle = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const heights = new Array(n).fill(0);
    let maxArea = 0;

    for (let i = 0; i < m; i++) {
        // Update the heights array to represent the histogram of heights for the current row
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        // Calculate the maximum area rectangle for the current histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

const largestRectangleArea = function (heights) {
    const stack = [];
    let maxArea = 0;
    const n = heights.length;

    for (let i = 0; i <= n; i++) {
        const h = i === n ? 0 : heights[i];
        while (stack.length !== 0 && h < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};

const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
];
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
console.log(maximalRectangle(matrix));

const matrix1 = [['0']];
// Output: 0
console.log(maximalRectangle(matrix1));
