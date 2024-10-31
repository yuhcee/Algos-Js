/**
 * **2463. Minimum Total Distance Traveled**
 *
 * There are some robots and factories on the X-axis. You are given an
 * integer array `robot` where `robot[i]` is the position of the `ith`
 * robot. You are also given a 2D integer array `factory` where `factory
 * [j] = [positionj, limitj]` indicates that `positionj` is the position
 * of the `jth` factory and that the `jth` factory can repair at most
 * `limitj` robots.
 *
 * The positions of each robot are **uniqu**. The positions of each
 * factory are also **unique**. Note that a robot can be in the **same
 * position** as a factory initially.
 *
 * All the robots are initially broken; they keep moving in one direction.
 * The direction could be the negative or the positive direction of the
 * X-axis. When a robot reaches a factory that did not reach its limit,
 * the factory repairs the robot, and it stops moving.
 *
 * **At any moment**, you can set the initial direction of moving for
 * **some** robot. Your target is to minimize the total distance traveled
 * by all the robots.
 *
 * Return the minimum total distance traveled by all the robots. The test
 * cases are generated such that all the robots can be repaired.
 *
 * **Note** that
 *
 * - All robots move at the same speed.
 * - If two robots move in the same direction, they will never collide.
 * - If two robots move in opposite directions and they meet at some
 * point, they do not collide. They cross each other.
 * - If a robot passes by a factory that reached its limits, it crosses it
 * as if it does not exist.
 * - If the robot moved from a position `x` to a position `y`, the
 * distance it moved is `|y - x|`.
 *
 * **Constraints:
 *
 * - `1 <= robot.length, factory.length <= 100`
 * - `factory[j].length == 2`
 * - `-109 <= robot[i], positionj <= 109`
 * - `0 <= limitj <= robot.length`
 * - The input will be generated such that it is always possible to repair
 * every robot.
 *
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
const minimumTotalDistance = function (robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const n = robot.length;
    const m = factory.length;

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));
    dp[0][0] = 0; // No robots and no factories require no distance.

    for (let j = 1; j <= m; j++) {
        dp[0][j] = 0; // Zero robots require zero distance.
        for (let i = 1; i <= n; i++) {
            let sum = 0;
            dp[i][j] = dp[i][j - 1]; // Initialize to previous factory's solution.

            for (let k = 1; k <= Math.min(i, factory[j - 1][1]); k++) {
                sum += Math.abs(robot[i - k] - factory[j - 1][0]);
                dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + sum);
            }
        }
    }

    return dp[n][m];
};
