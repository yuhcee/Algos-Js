/**
 * **1162. As Far from Land as Possible**
 *
 * Given an `n x n` `grid` containing only values `0` and `1`, where `0` represents water and `1`
 * represents land, find a water cell such that its distance to the nearest land cell is maximized,
 * and return the distance. If no land or water exists in the grid, return `-1`.
 *
 * The distance used in this problem is the Manhattan distance: the distance between two cells (`x0, y0`) and (`x1, y1`) is `|x0 - x1| + |y0 - y1|`.
 *
 * **Constraints:**
 *
 * - `n == grid.length`
 * - `n == grid[i].length`
 * - `1 <= n <= 100`
 * - `grid[i][j]` is `0` or `1`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
    const n = grid.length;
    const queue = [];
    let hasWater = false;
    let hasLand = false;

    // Check if there is at least one land and one water cell
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                hasWater = true;
            } else {
                hasLand = true;
            }
        }
    }

    // If either land or water is missing, return -1
    if (!hasLand || !hasWater) {
        return -1;
    }

    // Add all land cells to the queue
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }

    let distance = -1;

    // Perform breadth-first search to find the maximum distance
    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            // Explore the four adjacent cells
            const directions = [
                [1, 0], // Down
                [-1, 0], // Up
                [0, 1], // Right
                [0, -1], // Left
            ];

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                // Check if the cell is within the grid and is water
                if (newX >= 0 && newX < n && newY >= 0 && newY < n && grid[newX][newY] === 0) {
                    grid[newX][newY] = 1; // Mark the cell as visited land
                    queue.push([newX, newY]);
                }
            }
        }

        // Increment the distance after exploring a level
        distance++;
    }

    return distance;
};

const grid = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
];
// Output: 2
// Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
console.log(maxDistance(grid));
const grid1 = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
// Output: 4
// Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
console.log(maxDistance(grid1));
