/**
 * **861. Score After Flipping Matrix**
 *
 * You are given an `m x n` binary matrix `grid`.
 *
 * A **move** consists of choosing any row or column and toggling each value in
 * that row or column (i.e., changing all `0`'s to `1`'s, and all `1`'s to
 * `0`'s).
 *
 * Every row of the matrix is interpreted as a binary number, and the **score**
 * of the matrix is the sum of these numbers.
 *
 * Return *the highest possible score after making any number of moves
 * (including zero moves)*.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 20`
 * - `grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Step 1: Toggle rows to ensure leftmost digit is 1
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            toggleRow(grid, i);
        }
    }

    // Step 2: Toggle columns to maximize score
    for (let j = 1; j < n; j++) {
        let countOnes = 0;
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 1) {
                countOnes++;
            }
        }
        if (countOnes < m / 2) {
            toggleColumn(grid, j);
        }
    }

    // Step 3: Calculate the score
    let score = 0;
    for (let i = 0; i < m; i++) {
        score += parseInt(grid[i].join(''), 2);
    }

    return score;
};

// Helper function to toggle a row
function toggleRow(grid, rowIndex) {
    for (let j = 0; j < grid[0].length; j++) {
        grid[rowIndex][j] ^= 1; // Toggle 0 to 1 and 1 to 0
    }
}

// Helper function to toggle a column
function toggleColumn(grid, colIndex) {
    for (let i = 0; i < grid.length; i++) {
        grid[i][colIndex] ^= 1; // Toggle 0 to 1 and 1 to 0
    }
}

const grid = [
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
];
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
console.log(matrixScore(grid));

const grid1 = [[0]];
// Output: 1
console.log(matrixScore(grid1));
