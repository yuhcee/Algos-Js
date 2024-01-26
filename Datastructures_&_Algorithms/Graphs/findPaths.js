/**
 *
 * **576. Out of Boundary Paths**
 *
 * There is an `m x n` grid with a ball. The ball is initially at the
 * position `[startRow, startColumn]`.
 * You are allowed to move the ball to one of the four adjacent cells in the
 * grid (possibly out of the
 * grid crossing the grid boundary). You can apply **at most** `maxMove`
 * moves to the ball.
 *
 * Given the five integers `m`, `n`, `maxMove`, `startRow`, `startColumn`,
 * return the number of paths to
 * move the ball out of the grid boundary. Since the answer can be very
 * large, return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= m, n <= 50`
 * - `0 <= maxMove <= 50`
 * - `0 <= startRow < m`
 * - `0 <= startColumn < n`
 *
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
const findPaths = (m, n, maxMove, startRow, startColumn, memo = {}) => {
    // initialize local variables
    const MOD = 1e9 + 7,
        key = `${maxMove},${startRow},${startColumn}`;

    const rowInbounds = startRow >= 0 && startRow < m;
    const colInbounds = startColumn >= 0 && startColumn < n;
    const out = !rowInbounds || !colInbounds;

    // check out of bounds
    if (out || maxMove === 0) return +out;

    // return key if already found
    if (key in memo) return memo[key];

    // traverse grid
    const move =
        findPaths(m, n, maxMove - 1, startRow + 1, startColumn, memo) +
        findPaths(m, n, maxMove - 1, startRow - 1, startColumn, memo) +
        findPaths(m, n, maxMove - 1, startRow, startColumn - 1, memo) +
        findPaths(m, n, maxMove - 1, startRow, startColumn + 1, memo);

    return (memo[key] = move % MOD);
};

const m = 2,
    n = 2,
    maxMove = 2,
    startRow = 0,
    startColumn = 0;
// Output: 6
console.log(findPaths(m, n, maxMove, startRow, startColumn));

const m1 = 1,
    n1 = 3,
    maxMove1 = 3,
    startRow1 = 0,
    startColumn1 = 1;
// Output: 12
console.log(findPaths(m1, n1, maxMove1, startRow1, startColumn1));
