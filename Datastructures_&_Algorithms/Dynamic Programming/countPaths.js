/**
 * **2328. Number of Increasing Paths in a Grid**
 *
 * You are given an `m x n` integer matrix `grid`, where you can move from a cell to any adjacent cell
 * in all `4` directions.
 *
 * Return *the number of **strictly increasing** paths in the grid such that you can start from
 * **any** cell and end at **any** cell*. Since the answer may be very large, return it **modulo**
 * `109 + 7`.
 *
 * Two paths are considered different if they do not have exactly the same sequence of visited cells.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 1000`
 * - `1 <= m * n <= 105`
 * - `1 <= grid[i][j] <= 105`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countPaths = (grid) => {
    const mod = 1e9 + 7; // Modulo value for handling large numbers
    const m = grid.length; // Number of rows in the grid
    const n = grid[0].length; // Number of columns in the grid

    const dp = Array.from({ length: m }, () => Array(n).fill(-1)); // DP array to store the count of paths

    // Depth-first search function to calculate the count of paths
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            // If current cell is out of bounds, return 0
            return 0;
        }

        if (dp[i][j] !== -1) {
            // If the count for current cell is already calculated, return it
            return dp[i][j];
        }

        let count = 1; // Initialize count to 1 (current cell itself is a path)
        const val = grid[i][j]; // Value at current cell

        // Explore all four adjacent cells
        if (i > 0 && grid[i - 1][j] > val) {
            // If the cell above is valid and has a greater value, recursively calculate its count
            count += dfs(i - 1, j);
            count %= mod; // Modulo operation to handle large numbers
        }

        if (i < m - 1 && grid[i + 1][j] > val) {
            // If the cell below is valid and has a greater value, recursively calculate its count
            count += dfs(i + 1, j);
            count %= mod;
        }

        if (j > 0 && grid[i][j - 1] > val) {
            // If the cell to the left is valid and has a greater value, recursively calculate its count
            count += dfs(i, j - 1);
            count %= mod;
        }

        if (j < n - 1 && grid[i][j + 1] > val) {
            // If the cell to the right is valid and has a greater value, recursively calculate its count
            count += dfs(i, j + 1);
            count %= mod;
        }

        dp[i][j] = count; // Store the count of paths for current cell in the DP array
        return count; // Return the count of paths
    };

    let result = 0; // Variable to store the final result

    // Iterate over all cells in the grid and accumulate the counts
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result += dfs(i, j); // Calculate the count of paths starting from each cell
            result %= mod; // Modulo operation to handle large numbers
        }
    }

    return result; // Return the final result
};

const grid = [
    [1, 1],
    [3, 4],
];
// Output: 8
/* Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [1], [3], [4].
- Paths with length 2: [1 -> 3], [1 -> 4], [3 -> 4].
- Paths with length 3: [1 -> 3 -> 4].
The total number of paths is 4 + 3 + 1 = 8. */
console.log(countPaths(grid));

const grid1 = [[1], [2]];
// Output: 3
/* Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [2].
- Paths with length 2: [1 -> 2].
The total number of paths is 2 + 1 = 3. */
console.log(countPaths(grid1));
