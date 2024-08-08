/**
 * **885. Spiral Matrix III**
 *
 * You start at the cell (`rStart, cStart`) of an `rows x cols` grid facing
 * east. The northwest corner is at the first row and column in the grid,
 * and the southeast corner is at the last row and column.
 *
 * You will walk in a clockwise spiral shape to visit every position in this
 * grid. Whenever you move outside the grid's boundary, we continue our walk
 * outside the grid (but may return to the grid boundary later.).
 * Eventually, we reach all `rows * cols` spaces of the grid.
 *
 * Return *an array of coordinates representing the positions of the grid in
 * the order you visited them*.
 *
 * **Constraints:**
 *
 * - `1 <= rows, cols <= 100`
 * - `0 <= rStart < rows`
 * - `0 <= cStart < cols`
 *
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
const spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const result = [];
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let directionIndex = 0; // start by moving right
    let steps = 1; // steps to take in the current direction

    let r = rStart;
    let c = cStart;

    result.push([r, c]); // start position

    while (result.length < rows * cols) {
        for (let i = 0; i < 2; i++) {
            // increase step count every two directions
            const [dr, dc] = directions[directionIndex];
            for (let j = 0; j < steps; j++) {
                r += dr;
                c += dc;
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            directionIndex = (directionIndex + 1) % 4; // turn to the next direction
        }
        steps++; // increase the number of steps after two turns
    }

    return result;
};

const rows = 1,
    cols = 4,
    rStart = 0,
    cStart = 0;
// Output: [[0,0],[0,1],[0,2],[0,3]]
console.log(spiralMatrixIII(rows, cols, rStart, cStart));

const rows1 = 5,
    cols1 = 6,
    rStart1 = 1,
    cStart1 = 4;
// Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
console.log(spiralMatrixIII(rows1, cols1, rStart1, cStart1));
