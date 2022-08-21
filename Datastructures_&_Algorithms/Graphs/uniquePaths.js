/**
 * **62. Unique Paths**
 *
 * There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner**
 * (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 *
 * Given the two integers `m` and `n`, *return the number of possible unique paths that the robot can take to reach the bottom-right corner*.
 *
 * The test cases are generated so that the answer will be less than or equal to *2 * 109*.
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

    return memo[key];
};

const m = 3,
    n = 7;
// Output: 28
console.log(uniquePaths(m, n));
const m1 = 3,
    n1 = 2;
// Output: 3
/* Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down */
console.log(uniquePaths(m1, n1));
