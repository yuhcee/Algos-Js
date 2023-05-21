/**
 * **Shortest Bridge**
 *
 * You are given an `n x n` binary matrix `grid` where `1` represents land and `0`
 * represents water.
 *
 * An **island** is a 4-directionally connected group of `1`'s not connected to any other
 * `1`'s. There are **exactly two islands** in `grid`.
 *
 * You may change `0`'s to `1`'s to connect the two islands to form **one island**.
 *
 * Return *the smallest number of `0`'s you must flip to connect the two islands*.
 *
 * **Constraints:**
 *
 * - `n == grid.length == grid[i].length`
 * - `2 <= n <= 100`
 * - `grid[i][j]` is either `0` or `1`.
 * - There are exactly two islands in `grid`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = function (grid) {
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ]; // Possible directions: up, left, down, right
    const m = grid.length; // Number of rows
    const n = grid[0].length; // Number of columns

    // Function to mark the first island using depth-first search (DFS)
    const markFirstIsland = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
            return;
        }

        // Mark the cell as visited
        grid[i][j] = -1;

        // Recursively mark the neighboring cells
        for (const [dx, dy] of directions) {
            markFirstIsland(i + dx, j + dy);
        }
    };

    // Function to find the shortest path to the second island using breadth-first search (BFS)
    const findShortestPath = (queue) => {
        let steps = 0;

        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const [x, y] = queue.shift();

                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;

                    if (newX < 0 || newX >= m || newY < 0 || newY >= n || grid[newX][newY] === -1) {
                        continue; // Skip if out of bounds or already visited
                    }

                    if (grid[newX][newY] === 1) {
                        return steps; // Found the second island
                    }

                    grid[newX][newY] = -1; // Mark as visited
                    queue.push([newX, newY]); // Add to the queue for further exploration
                }
            }

            steps++; // Increment the number of steps
        }

        return -1; // No path to the second island found
    };

    // Step 1: Mark the first island and identify its cells
    let firstIslandFound = false;
    for (let i = 0; i < m; i++) {
        if (firstIslandFound) {
            break; // Exit the loop once the first island is found
        }

        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                markFirstIsland(i, j);
                firstIslandFound = true;
                break;
            }
        }
    }

    // Step 2: Find the shortest path to the second island from the cells of the first island
    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === -1) {
                queue.push([i, j]);
            }
        }
    }

    return findShortestPath(queue);
};

const grid = [
    [0, 1],
    [1, 0],
];
// Output: 1
console.log(shortestBridge(grid));

const grid1 = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
];
// Output: 2
console.log(shortestBridge(grid1));

const grid2 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
];
// Output: 1
console.log(shortestBridge(grid2));

const grid3 = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
];
// Output: 1
console.log(shortestBridge(grid3));
