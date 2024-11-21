/**
 * **2257. Count Unguarded Cells in the Grid**
 *
 * You are given two integers `m` and `n` representing a **0-indexed** `m x n`
 * grid. You are also given two 2D integer arrays `guards` and `walls` where
 * `guards[i] = [rowi, coli]` and `walls[j] = [rowj, colj]` represent the
 * positions of the `ith` guard and `jth` wall respectively.
 *
 * A guard can see **every** cell in the four cardinal directions (north, east,
 * south, or west) starting from their position unless **obstructed** by a wall
 * or another guard. A cell is **guarded** if there is **at least one** guard
 * that can see it.
 *
 * Return *the number of unoccupied cells that are **not guarded***.
 *
 * **Constraints:**
 *
 * - `1 <= m, n <= 105`
 * - `2 <= m * n <= 105`
 * - `1 <= guards.length, walls.length <= 5 * 104`
 * - `2 <= guards.length + walls.length <= m * n`
 * - `guards[i].length == walls[j].length == 2`
 * - `0 <= rowi, rowj < m`
 * - `0 <= coli, colj < n`
 * - All the positions in guards and walls are unique.
 *
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
const countUnguarded = function (m, n, guards, walls) {};
