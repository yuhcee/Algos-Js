/**
 * **1293. Shortest Path in a Grid with Obstacles Elimination**
 *
 * You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can
 * move up, down, left, or right from and to an empty cell in **one step**.
 *
 * Return *the minimum number of **steps** to walk from the upper left corner `(0, 0)` to the lower right corner `(m
 * - 1, n - 1)` given that you can eliminate **at most** `k` obstacles*. If it is not possible to find such walk
 * return `-1`.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 40`
 * - `1 <= k <= m * n`
 * - `grid[i][j]` is either `0` or `1`.
 * - `grid[0][0] == grid[m - 1][n - 1] == 0`
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
    let m = grid.length;
    let n = m && grid[0].length;

    if (m === 1 && n === 1) {
        return 0;
    }

    let queue = [[0, 0, k]];
    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let visited = new Set();
    let steps = 0;

    while (queue.length > 0) {
        let size = queue.length;

        while (size--) {
            let [row, col, em] = queue.shift();

            if (visited.has(row + '#' + col + '#' + em)) {
                continue;
            }
            visited.add(row + '#' + col + '#' + em);
            for (let dir of dirs) {
                let nx = row + dir[0];
                let ny = col + dir[1];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || visited.has(nx + '#' + ny + '#' + em)) {
                    continue;
                }
                if (nx === m - 1 && ny === n - 1) {
                    return steps + 1;
                }
                if (grid[nx][ny] === 1) {
                    if (em > 0) {
                        queue.push([nx, ny, em - 1]);
                    }
                } else {
                    queue.push([nx, ny, em]);
                }
            }
        }
        steps++;
    }
    return -1;
};

const grid = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    k = 1;
// Output: 6
/* Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2). */
console.log(shortestPath(grid, k));
