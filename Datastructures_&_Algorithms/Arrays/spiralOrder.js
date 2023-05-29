/**
 * **54. Spiral Matrix**
 *
 * Given an `m x n` `matrix`, return *all elements of the `matrix` in spiral order*.
 *
 * **Constraints:**
 *
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m, n <= 10`
 * - `-100 <= matrix[i][j] <= 100`
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        // Traverse right column
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        // Traverse bottom row
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        // Traverse left column
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }

    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(matrix));

const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder(matrix1));

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
];
// Output: [1,2,3,6,9,12,15,14,13,10,7,4,5,8,11]
console.log(spiralOrder(matrix2));
