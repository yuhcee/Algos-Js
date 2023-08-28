/**
 * **542. 01 Matrix**
 *
 * Given an `m x n` binary matrix `mat`, return *the distance of the
 * nearest `0` for each cell*.
 *
 * The distance between two adjacent cells is `1`.
 *
 * **Constraints:**
 *
 * - `m == mat.length`
 * - `n == mat[i].length`
 * - `1 <= m, n <= 104`
 * - `1 <= m * n <= 104`
 * - `mat[i][j]` is either `0` or `1`.
 * - There is at least one `0` in `mat`.
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Enqueue all cells with value 0 and mark them as visited
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                visited[i][j] = true;
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && !visited[newRow][newCol]) {
                mat[newRow][newCol] = mat[row][col] + 1;
                queue.push([newRow, newCol]);
                visited[newRow][newCol] = true;
            }
        }
    }

    return mat;
};

const mat = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];
// Output: [[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix(mat));

const mat1 = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
];
// Output: [[0,0,0],[0,1,0],[1,2,1]]
console.log(updateMatrix(mat1));
