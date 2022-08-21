/**
 * **63. Unique Paths II**
 *
 * You are given an `m x n` integer array `grid`. There is a robot initially located at the **top-left
 * corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m-1]
 * [n-1]`). The robot can only move either down or right at any point in time.
 *
 * An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes
 * cannot include **any** square that is an obstacle.
 *
 * Return *the number of possible unique paths that the robot can take to reach the bottom-right corner*
 *
 * The testcases are generated so that the answer will be less than or equal to `2 * 109`.
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    const R = obstacleGrid.length;
    const C = obstacleGrid[0].length;

    const explore = (r, c, memo = {}) => {
        if (obstacleGrid[r] === undefined || obstacleGrid[r][c] === undefined || obstacleGrid[r][c] === 1) return 0;

        if (r === R - 1 && c === C - 1) return 1;

        let key = r + ',' + c;
        if (key in memo) return memo[key];

        if (obstacleGrid[r][c] === 0) {
            memo[key] = explore(r + 1, c, memo) + explore(r, c + 1, memo);
        }

        return memo[key];
    };

    return explore(0, 0);
};

const obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
]; // Output: 2
/* Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right */
const obstacleGrid1 = [
    [0, 1],
    [0, 0],
]; // Output: 1
console.log(uniquePathsWithObstacles(obstacleGrid));
console.log(uniquePathsWithObstacles(obstacleGrid1));
