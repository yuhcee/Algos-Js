/**
 * **2257. Count Unguarded Cells in the Grid**
 *
 * You are given two integers `m` and `n` representing a **0-indexed** `m x n`
 * grid. You are also given two 2D integer arrays `guards` and `walls` where
 * `guards[i] = [rowi, coli]` and `walls[j] = [rowj, colj]` represent the
 * positions of the `ith` guard and `jth` wall respectively.
 *
 * A guard can see **every** cell in the four cardinal directions (north, east,
 * south, or west) starting from their position unless **obstructed** by a wall
 * or another guard. A cell is **guarded** if there is **at least one** guard
 * that can see it.
 *
 * Return *the number of unoccupied cells that are **not guarded***.
 *
 * **Constraints:**
 *
 * - `1 <= m, n <= 105`
 * - `2 <= m * n <= 105`
 * - `1 <= guards.length, walls.length <= 5 * 104`
 * - `2 <= guards.length + walls.length <= m * n`
 * - `guards[i].length == walls[j].length == 2`
 * - `0 <= rowi, rowj < m`
 * - `0 <= coli, colj < n`
 * - All the positions in guards and walls are unique.
 *
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
const countUnguarded = function (m, n, guards, walls) {
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Constants for marking grid
    const GUARD = 1,
        WALL = 2,
        GUARDED = 3;

    // Mark guards and walls on the grid
    for (const [r, c] of guards) grid[r][c] = GUARD;
    for (const [r, c] of walls) grid[r][c] = WALL;

    // Directions: [rowDelta, colDelta]
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // Simulate guard surveillance
    for (const [r, c] of guards) {
        for (const [dr, dc] of directions) {
            let x = r + dr,
                y = c + dc;
            while (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== WALL && grid[x][y] !== GUARD) {
                if (grid[x][y] === 0) grid[x][y] = GUARDED;
                x += dr;
                y += dc;
            }
        }
    }

    // Count unguarded cells
    let unguarded = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) unguarded++;
        }
    }

    return unguarded;
};

const m = 4,
    n = 6,
    guards = [
        [0, 0],
        [1, 1],
        [2, 3],
    ],
    walls = [
        [0, 1],
        [2, 2],
        [1, 4],
    ];
// Output: 7
/* Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7. */
console.log(countUnguarded(m, n, guards, walls));
