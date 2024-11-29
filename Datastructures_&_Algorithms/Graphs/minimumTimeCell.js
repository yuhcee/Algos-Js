/**
 * **2577. Minimum Time to Visit a Cell In a Grid**
 *
 * You are given a `m x n` matrix `grid` consisting of **non-negative**
 * integers where `grid[row][col]` represents the minimum time required to be
 * able to visit the cell `(row, col)`, which means you can visit the cell `
 * (row, col)` only when the time you visit it is greater than or equal to `grid
 * [row][col]`.
 *
 * You are standing in the **top-left** cell of the matrix in the `0th` second,
 * and you must move to **any** adjacent cell in the four directions: up, down,
 * left, and right. Each move you make takes 1 second.
 *
 * Return *the **minimum** time required in which you can visit the
 * bottom-right cell of the matrix*. If you cannot visit the bottom-right cell,
 * then return -1.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `2 <= m, n <= 1000`
 * - `4 <= m * n <= 105`
 * - `0 <= grid[i][j] <= 105`
 * - `grid[0][0] == 0`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minimumTime = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // If we can't leave the starting cell
    if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

    // MinHeap for Dijkstra's algorithm
    const pq = new MinPriorityQueue({ priority: ([time]) => time });
    pq.enqueue([0, 0, 0]); // [time, row, col]
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    while (!pq.isEmpty()) {
        const [currentTime, x, y] = pq.dequeue().element;

        if (x === m - 1 && y === n - 1) return currentTime; // Reached destination

        if (visited[x][y]) continue;
        visited[x][y] = true;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]) {
                const minArrivalTime = grid[nx][ny];
                let nextTime = currentTime + 1;

                // Adjust for parity if needed
                if (nextTime < minArrivalTime) {
                    const wait = minArrivalTime - nextTime;
                    nextTime += wait + (wait % 2);
                }

                pq.enqueue([nextTime, nx, ny]);
            }
        }
    }

    return -1; // If no path is found
};
