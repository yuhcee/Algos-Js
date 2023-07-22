/**
 * **688. Knight Probability in Chessboard**
 *
 * On an `n x n` chessboard, a knight starts at the cell `(row, column)` and attempts to make exactly
 * `k` moves. The rows and columns are **0-indexed**, so the top-left cell is `(0, 0)`, and the
 * bottom-right cell is `(n - 1, n - 1)`.
 *
 * A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells
 * in a cardinal direction, then one cell in an orthogonal direction.
 *
 * Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even
 * if the piece would go off the chessboard) and moves there.
 *
 * The knight continues moving until it has made exactly `k` moves or has moved off the chessboard.
 *
 * Return *the probability that the knight remains on the board after it has stopped moving*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 25`
 * - `0 <= k <= 100`
 * - `0 <= row, column <= n - 1`
 *
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
const knightProbability = function (n, k, row, column) {
    // Create a 2D array to store the probability of being on each cell after k moves
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // The 8 possible moves a knight can make (relative to its current position)
    const moves = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
    ];

    // Mark the starting position with a probability of 1 since the knight is initially at that position
    dp[row][column] = 1;

    // Loop through k moves
    for (let move = 0; move < k; move++) {
        // Create a new DP array to store the updated probabilities after each move
        const newDp = Array.from({ length: n }, () => Array(n).fill(0));

        // Loop through each cell on the chessboard
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                // Check all possible moves for the knight from the current cell
                for (const [dr, dc] of moves) {
                    const newR = r + dr;
                    const newC = c + dc;

                    // Check if the new position is still within the chessboard
                    if (newR >= 0 && newR < n && newC >= 0 && newC < n) {
                        // Update the probability for the new position based on the probability of the current position
                        newDp[newR][newC] += dp[r][c] / 8;
                    }
                }
            }
        }

        // Update the dp array with the new probabilities after the current move
        dp.splice(0, dp.length, ...newDp);
    }

    // Calculate the total probability of the knight being on the chessboard after k moves
    let totalProbability = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            totalProbability += dp[r][c];
        }
    }

    return totalProbability;
};
