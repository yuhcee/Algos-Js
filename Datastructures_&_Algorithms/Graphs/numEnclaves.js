/**
 * **1020. Number of Enclaves**
 *
 * You are given an `m x n` binary matrix `grid`, where `0` represents a sea cell and `1` represents
 * a land cell.
 *
 * A **move** consists of walking from one land cell to another adjacent (**4-directionally**) land
 * cell or walking off the boundary of the `grid`.
 *
 * Return *the number of land cells in `grid` for which we cannot walk off the boundary of the grid
 * in any number of **moves**.
 *
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 500`
 * - `grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (A) {
    let result = 0;
    for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < A[row].length; col++) {
            if (A[row][col] == 1) {
                let localResult = dfs(row, col, 0);
                if (localResult != -Infinity) result += localResult;
            }
        }
    }

    return result;

    function dfs(row, col, area) {
        if (row < 0 || col < 0 || row >= A.length || col >= A[0].length || A[row][col] == 0) return area;

        if ((row == 0 || col == 0 || row == A.length - 1 || col == A[0].length - 1) && A[row][col] == 1) {
            area = -Infinity;
        }

        area++;
        A[row][col] = 0;
        area = dfs(row - 1, col, area); // top
        area = dfs(row + 1, col, area); // bottom
        area = dfs(row, col - 1, area); // left
        area = dfs(row, col + 1, area); // right

        return area;
    }
};
