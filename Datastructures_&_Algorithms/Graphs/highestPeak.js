/**
 * **1765. Map of Highest Peak**
 *
 * You are given an integer matrix `isWater` of size `m x n` that
 * represents a map of land and **water** cells.
 *
 * - If `isWater[i][j] == 0`, cell `(i, j)` is a **land** cell.
 * - If `isWater[i][j] == 1`, cell `(i, j)` is a **water** cell.
 *
 * You must assign each cell a height in a way that follows these rules:
 *
 * - The height of each cell must be non-negative.
 * - If the cell is a **water** cell, its height must be `0`.
 * - Any two adjacent cells must have an absolute height difference of **at
 * most** 1. A cell is adjacent to another cell if the former is directly
 * north, east, south, or west of the latter (i.e., their sides are
 * touching).
 *
 * Find an assignment of heights such that the maximum height in the matrix
 * is **maximized**.
 *
 * Return *an integer matrix height of size `m x n` where height[i][j] is
 * cell `(i, j)`'s height. If there are multiple solutions, return **any**
 * of them*.
 *
 * **Constraints:**
 *
 * - `m == isWater.length`
 * - `n == isWater[i].length`
 * - `1 <= m, n <= 1000`
 * - `isWater[i][j]` is `0` or `1`.
 * - There is at least **one** water cell.
 *
 * @param {number[][]} isWater
 * @return {number[][]}
 */
const highestPeak = function (isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    let height = Array(m)
        .fill()
        .map(() => Array(n).fill(-1));
    let queue = [];

    // Directions for adjacent cells
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Add all water cells to the queue initially
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS using two arrays for queue to avoid shift() performance issues
    let currentLevel = queue;
    let nextLevel = [];
    let currentHeight = 0;

    while (currentLevel.length > 0) {
        nextLevel = [];
        for (let [i, j] of currentLevel) {
            for (let [di, dj] of directions) {
                let newI = i + di,
                    newJ = j + dj;
                if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && height[newI][newJ] === -1) {
                    height[newI][newJ] = currentHeight + 1;
                    nextLevel.push([newI, newJ]);
                }
            }
        }
        // Swap arrays for the next level
        currentLevel = nextLevel;
        currentHeight++;
    }

    return height;
};

const isWater = [
    [0, 1],
    [0, 0],
];
// Output: [[1,0],[2,1]]
/* Explanation: The image shows the assigned heights of each cell.
The blue cell is the water cell, and the green cells are the land cells. */
console.log(highestPeak(isWater));
