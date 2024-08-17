/**
 * **1937. Maximum Number of Points with Cost**
 *
 * You are given an `m x n` integer matrix `points` (**0-indexed**). Starting with `0` points, you
 * want to **maximize** the number of points you can get from the matrix.
 *
 * To gain points, you must pick one cell in **each row**. Picking the cell at coordinates `(r, c)`
 * will add `points[r][c]` to your score.
 *
 * However, you will lose points if you pick a cell too far from the cell that you picked in the
 * previous row. For every two adjacent rows `r` and `r + 1` (where `0 <= r < m - 1`), picking
 * cells at coordinates `(r, c1)` and `(r + 1, c2)` will **subtract** `abs(c1 - c2)` from your
 * score.
 *
 * Return *the **maximum** number of points you can achieve*.
 *
 * `abs(x)` is defined as:
 *
 * - `x for x >= 0`.
 * - `-x for x < 0`.
 *
 * **Constraints:**
 *
 * - `m == points.length`
 * - `n == points[r].length`
 * - `1 <= m, n <= 105`
 * - `1 <= m * n <= 105`
 * - `0 <= points[r][c] <= 105`
 *
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
    let width = points[0].length;
    let current = new Array(width).fill(0);
    let previous = new Array(width);

    for (let i = 0; i < width; i++) {
        previous[i] = points[0][i];
    }

    for (let row = 1; row < points.length; row++) {
        let peak = 0;

        // Forward sweep
        for (let col = 0; col < width; col++) {
            peak = Math.max(peak - 1, previous[col]);
            current[col] = points[row][col] + peak;
        }

        peak = 0;

        // Backward sweep
        for (let col = width - 1; col >= 0; col--) {
            peak = Math.max(peak - 1, previous[col]);
            current[col] = Math.max(current[col], points[row][col] + peak);
        }

        [previous, current] = [current, previous];
    }

    return Math.max(...previous);
};
