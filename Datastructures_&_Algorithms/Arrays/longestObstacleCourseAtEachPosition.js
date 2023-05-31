/**
 * **1964. Find the Longest Valid Obstacle Course at Each Position**
 *
 * You want to build some obstacle courses. You are given a **0-indexed**
 * integer array `obstacles` of length `n`, where `obstacles[i]` describes
 * the height of the `ith` obstacle.
 *
 * For every index `i` between `0` and `n - 1` (**inclusive**), find the
 * length of the **longest obstacle course** in obstacles such that:
 *
 * - You choose any number of obstacles between `0` and `i` **inclusive**.
 * - You must include the `ith` obstacle in the course.
 * - You must put the chosen obstacles in the **same order** as they
 * appear in `obstacles`.
 * - Every obstacle (except the first) is **taller** than or the **same
 * height** as the obstacle immediately before it.
 *
 * Return *an array `ans` of length `n`, where `ans[i]` is the length of
 * the **longest obstacle course** for index `i` as described above.
 *
 * **Constraints:**
 *
 * - `n == obstacles.length`
 * - `1 <= n <= 105`
 * - `1 <= obstacles[i] <= 107`
 *
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function (obstacles) {
    const n = obstacles.length;
    const dp = []; // Maintains the increasing subsequence of obstacle heights
    const ans = [];

    for (let i = 0; i < n; i++) {
        const obstacle = obstacles[i];
        const index = binarySearch(dp, obstacle);
        ans[i] = index + 1; // Length of the obstacle course at position i

        if (index === dp.length) {
            dp.push(obstacle); // Append the obstacle to the end
        } else {
            dp[index] = obstacle; // Replace the element at the found index
        }
    }

    return ans;
};
// Binary search to find the correct position for the obstacle height
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
