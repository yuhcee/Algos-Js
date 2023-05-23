/**
 * **59. Spiral Matrix II**
 *
 * Given a positive integer `n`, generate an `n x n` `matrix` filled with elements from
 * `1` to `n2` in spiral order.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 20`
 *
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
    // Create an n x n matrix filled with zeros
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let num = 1; // Starting number

    let top = 0; // Top row index
    let bottom = n - 1; // Bottom row index
    let left = 0; // Left column index
    let right = n - 1; // Right column index

    while (top <= bottom && left <= right) {
        // Fill the top row from left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++; // Move to the next row

        // Fill the right column from top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--; // Move to the previous column

        // Fill the bottom row from right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--; // Move to the previous row

        // Fill the left column from bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++; // Move to the next column
    }

    return matrix;
};
