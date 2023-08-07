/**
 * **74. Search a 2D Matrix**
 *
 *
 * You are given an `m x n` integer matrix `matrix` with the following two
 * properties:
 *
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous
 * row.
 *
 * Given an integer `target`, return *`true` if `target` is in `matrix` or `false`
 * otherwise*.
 *
 * You must write a solution in `O(log(m * n))` time complexity.
 *
 * **Constraints:**
 *
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m, n <= 100`
 * - `-104 <= matrix[i][j], target <= 104`
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Binary search helper function for the 1D array
    const binarySearch = (arr, left, right, target) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midVal = arr[mid];

            if (midVal === target) {
                return true;
            } else if (midVal < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    };

    // Perform binary search on each row
    for (let row = 0; row < rows; row++) {
        const firstNum = matrix[row][0];
        const lastNum = matrix[row][cols - 1];

        // If the target is within the range of this row, do binary search on it
        if (target >= firstNum && target <= lastNum) {
            if (binarySearch(matrix[row], 0, cols - 1, target)) {
                return true;
            }
        }
    }

    return false;
};

const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ],
    target = 3;
// Output: true
console.log(searchMatrix(matrix, target));
