/**
 * **2849. Determine if a Cell Is Reachable at a Given Time**
 *
 * You are given four integers `sx`, `sy`, `fx`, `fy`, and a
 * **non-negative** integer `t`.
 *
 * In an infinite 2D grid, you start at the cell `(sx, sy)`. Each
 * second, you **must** move to any of its adjacent cells.
 *
 * Return *`true` if you can reach cell `(fx, fy)` after exactly `t`
 * seconds, or `false` otherwise*.
 *
 * A cell's **adjacent** cells are the 8 cells around it that share at
 * least one corner with it. You can visit the same cell several times.
 *
 * **Constraints:**
 *
 * - `1 <= sx, sy, fx, fy <= 109`
 * - `0 <= t <= 109`
 *
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
const isReachableAtTime = function (sx, sy, fx, fy, t) {
    const xDist = Math.abs(sx - fx);
    const yDist = Math.abs(sy - fy);

    if (xDist === 0 && yDist === 0) {
        return t !== 1;
    }

    return xDist <= t && yDist <= t;
};

const sx = 2,
    sy = 4,
    fx = 7,
    fy = 7,
    t = 6;
// Output: true
/* Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above. */
console.log(isReachableAtTime(sx, sy, fx, fy, t));

const sx1 = 3,
    sy1 = 1,
    fx1 = 7,
    fy1 = 3,
    t1 = 3;
// Output: false
/* Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above. Hence, we cannot reach cell (7, 3) at the third second. */
console.log(isReachableAtTime(sx1, sy1, fx1, fy1, t1));
