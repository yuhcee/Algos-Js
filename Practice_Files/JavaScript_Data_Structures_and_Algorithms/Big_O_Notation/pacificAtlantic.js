/**
 * **417. Pacific Atlantic Water Flow**
 *
 * There is an `m x n` rectangular island that borders both the **Pacific Ocean** and **Atlantic Ocean**.
 * The **Pacific Ocean** touches the island's left and top edges, and the **Atlantic Ocean** touches the
 * island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an `m x n` integer matrix
 * `heights` where `heights[r][c]` represents the **height above sea level** of the cell at coordinate `
 * (r, c)`.
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north,
 * south, east, and west if the neighboring cell's **height is less than or equal to** the current cell's
 * height. Water can flow from any cell adjacent to an ocean into the ocean.
 *
 * Return *a **2D list** of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain
 * water can flow from cell (`ri, ci`) to both the Pacific and Atlantic oceans*.
 *
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    // if matrix is empty, return []
    if (!matrix.length) return [];

    // get matrix rows and cols
    const rowLength = matrix.length,
        colLength = matrix[0].length;

    // init ocean sides
    const PACIFIC = matrix,
        ATLANTIC = [...matrix.map((row) => [...row])]; // deep clone

    // init directions to explore
    const DIRS = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const output = [];

    // explore DFS
    function explore(r, c, grid) {
        const val = grid[r][c];
        grid[r][c] = '#';
    }
};
