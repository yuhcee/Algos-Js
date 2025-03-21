/**
 * **407. Trapping Rain Water II**
 *
 * Given an `m x n` integer matrix `heightMap` representing the height of
 * each unit cell in a 2D elevation map, return *the volume of water it can
 * trap after raining.*
 *
 * **Constraints:**
 *
 * - `m == heightMap.length`
 * - `n == heightMap[i].length`
 * - `1 <= m, n <= 200`
 * - `0 <= heightMap[i][j] <= 2 * 104`
 *
 * @param {number[][]} heightMap
 * @return {number}
 */
const trapRainWater = function (heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;

    if (m < 3 || n < 3) return 0; // Not enough space to trap water

    // Min-heap to store cells by their height
    const minHeap = [];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // Add all boundary cells to the heap
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                minHeap.push([heightMap[i][j], i, j]); // [height, row, col]
                visited[i][j] = true;
            }
        }
    }

    // Min-heapify
    minHeap.sort((a, b) => a[0] - b[0]);

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0], // Right, Down, Left, Up
    ];

    let waterTrapped = 0;

    while (minHeap.length > 0) {
        const [height, row, col] = minHeap.shift();

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Skip out-of-bound or visited cells
            if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n || visited[newRow][newCol]) continue;

            // Calculate trapped water
            const neighborHeight = heightMap[newRow][newCol];
            waterTrapped += Math.max(0, height - neighborHeight);

            // Update neighbor height and add to the heap
            minHeap.push([Math.max(height, neighborHeight), newRow, newCol]);
            visited[newRow][newCol] = true;
        }

        // Reheapify
        minHeap.sort((a, b) => a[0] - b[0]);
    }

    return waterTrapped;
};

const heightMap = [
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
    [2, 3, 3, 2, 3, 1],
];
// Output: 4
/* Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4. */
console.log(trapRainWater(heightMap));

const heightMap1 = [
    [3, 3, 3, 3, 3],
    [3, 2, 2, 2, 3],
    [3, 2, 1, 2, 3],
    [3, 2, 2, 2, 3],
    [3, 3, 3, 3, 3],
];
// Output: 10
console.log(trapRainWater(heightMap1));
