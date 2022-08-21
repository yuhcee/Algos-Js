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
 * Return *a **2D list** of grid coordinates `result` where `result[i] = [ri, ci]` denotes that
 * rain water can flow from cell (`ri, ci`) to both the Pacific and Atlantic oceans*.
 *
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    // if matrix is empty, return []
    if (!heights.length) return [];

    // get heights rows and cols
    const rowLength = heights.length,
        colLength = heights[0].length;

    // init ocean sides
    const PACIFIC = heights,
        ATLANTIC = [...heights.map((row) => [...row])]; // deep clone

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

        // check out of bounds
        for (let [dr, dc] of DIRS) {
            dr += r;
            dc += c;
            if (grid[dr] && grid[dr][dc] !== undefined && grid[dr][dc] !== '#' && grid[dr][dc] >= val) {
                explore(dr, dc, grid);
            }
        }
    }

    for (let c = 0; c < colLength; c += 1) {
        explore(rowLength - 1, c, ATLANTIC); // bottom
        explore(0, c, PACIFIC); // top
    }

    for (let r = 0; r < rowLength; r += 1) {
        explore(r, colLength - 1, ATLANTIC); // right
        explore(r, 0, PACIFIC); // left
    }

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (PACIFIC[row][col] === '#' && ATLANTIC[row][col] === '#') {
                output.push([row, col]);
            }
        }
    }

    return output;
};

const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
/* Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans. */

console.log(pacificAtlantic(heights));

const heights1 = [[1]];
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
console.log(pacificAtlantic(heights1));
