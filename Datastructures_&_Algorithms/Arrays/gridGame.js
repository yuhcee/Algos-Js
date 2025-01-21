/**
 * **2017. Grid Game**
 *
 * You are given a **0-indexed** 2D array `grid` of size `2 x n`, where
 * `grid[r][c]` represents the number of points at position `(r, c)` on the
 * matrix. Two robots are playing a game on this matrix.
 *
 * Both robots initially start at `(0, 0)` and want to reach `(1, n-1)`.
 * Each robot may only move to the **right** (`(r, c)` to `(r, c + 1)`) or
 * **down** (`(r, c)` to `(r + 1, c)`).
 *
 * At the start of the game, the **first** robot moves from `(0, 0)` to `
 * (1, n-1)`, collecting all the points from the cells on its path. For all
 * cells `(r, c)` traversed on the path, `grid[r][c]` is set to `0`. Then,
 * the **second** robot moves from `(0, 0)` to `(1, n-1)`, collecting the
 * points on its path. Note that their paths may intersect with one another.
 *
 * The **first** robot wants to **minimize** the number of points collected
 * by the **second** robot. In contrast, the second robot wants to
 * **maximize** the number of points it collects. If both robots play
 * **optimally**, return *the **number of points** collected by the
 * **second** robot.*
 *
 * **Constraints:**
 *
 * - `grid.length == 2`
 * - `n == grid[r].length`
 * - `1 <= n <= 5 * 104`
 * - `1 <= grid[r][c] <= 105`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame = function (grid) {
    const n = grid[0].length;

    // Compute suffix sums for the top row
    const topSum = Array(n).fill(0);
    topSum[n - 1] = grid[0][n - 1];
    for (let i = n - 2; i >= 0; i--) {
        topSum[i] = topSum[i + 1] + grid[0][i];
    }

    // Compute prefix sums for the bottom row
    const bottomSum = Array(n).fill(0);
    bottomSum[0] = grid[1][0];
    for (let i = 1; i < n; i++) {
        bottomSum[i] = bottomSum[i - 1] + grid[1][i];
    }

    // Minimize the maximum points the second robot can collect
    let result = Infinity;
    for (let i = 0; i < n; i++) {
        const above = i + 1 < n ? topSum[i + 1] : 0; // Points remaining in the top row
        const below = i - 1 >= 0 ? bottomSum[i - 1] : 0; // Points remaining in the bottom row
        result = Math.min(result, Math.max(above, below));
    }

    return result;
};
