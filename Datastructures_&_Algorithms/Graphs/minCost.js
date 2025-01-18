/**
 * **1368. Minimum Cost to Make at Least One Valid Path in a Grid**
 *
 * Given an `m x n` grid. Each cell of the grid has a sign pointing to the
 * next cell you should visit if you are currently in this cell. The sign
 * of `grid[i][j]` can be:
 *
 * - `1` which means go to the cell to the right. (i.e go from `grid[i][j]`
 * to `grid[i][j + 1]`)
 * - `2` which means go to the cell to the left. (i.e go from `grid[i][j]`
 * to `grid[i][j - 1]`)
 * - `3` which means go to the lower cell. (i.e go from `grid[i][j]` to
 * `grid[i + 1][j]`)
 * - `4` which means go to the upper cell. (i.e go from `grid[i][j]` to
 * `grid[i - 1][j]`)
 *
 * Notice that there could be some signs on the cells of the grid that
 * point outside the grid.
 *
 * You will initially start at the upper left cell `(0, 0)`. A valid path
 * in the grid is a path that starts from the upper left cell `(0, 0)` and
 * ends at the bottom-right cell `(m - 1, n - 1)` following the signs on
 * the grid. The valid path does not have to be the shortest.
 *
 * You can modify the sign on a cell with `cost = 1`. You can modify the
 * sign on a cell one time only.
 *
 * Return *the minimum cost to make the grid have at least one valid path.*
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 100`
 * - `1 <= grid[i][j] <= 4`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const directions = {
        1: [0, 1], // right
        2: [0, -1], // left
        3: [1, 0], // down
        4: [-1, 0], // up
    };

    const deque = [];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    deque.push([0, 0, 0]); // Start at (0, 0) with cost 0

    while (deque.length) {
        const [row, col, cost] = deque.shift();

        // If already visited, skip
        if (visited[row][col]) continue;
        visited[row][col] = true;

        // If we reach the bottom-right corner, return the cost
        if (row === m - 1 && col === n - 1) return cost;

        // Explore all four directions
        for (let dir = 1; dir <= 4; dir++) {
            const [dr, dc] = directions[dir];
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if within bounds
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                const newCost = cost + (grid[row][col] === dir ? 0 : 1);
                if (!visited[newRow][newCol]) {
                    if (grid[row][col] === dir) {
                        deque.unshift([newRow, newCol, newCost]); // Cost 0
                    } else {
                        deque.push([newRow, newCol, newCost]); // Cost 1
                    }
                }
            }
        }
    }

    return -1; // This line should never be reached
};

const grid = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
];
// Output: 3
/* Explanation: You will start at point (0, 0).
The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
The total cost = 3. */
console.log(minCost(grid));
