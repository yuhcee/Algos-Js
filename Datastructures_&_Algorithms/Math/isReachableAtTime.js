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
