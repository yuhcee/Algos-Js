/**
 * **1035. Uncrossed Lines**
 *
 * You are given two integer arrays `nums1` and `nums2`. We write the integers of `nums1`
 * and `nums2` (in the order they are given) on two separate horizontal lines.
 *
 * We may draw connecting lines: a straight line connecting two numbers `nums1[i]` and
 * `nums2[j]` such that:
 *
 * - `nums1[i] == nums2[j]`, and
 * - the line we draw does not intersect any other connecting (non-horizontal) line.
 *
 * Note that a connecting line cannot intersect even at the endpoints (i.e., each number
 * can only belong to one connecting line).
 *
 * Return *the maximum number of connecting lines we can draw in this way*.
 *
 * **Constraints:**
 *
 * - `1 <= nums1.length, nums2.length <= 500`
 * - `1 <= nums1[i], nums2[j] <= 2000`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    // Create a 2D array to store the maximum number of connecting lines
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    // Iterate through the arrays and fill in the DP array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                // If the numbers are equal, we can draw a connecting line
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If the numbers are not equal, we take the maximum of the previous lines
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The bottom-right element of the DP array contains the maximum number of connecting lines
    return dp[m][n];
};

const nums1 = [1, 4, 2],
    nums2 = [1, 2, 4];
// Output: 2
/* Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2. */
console.log(maxUncrossedLines(nums1, nums2));
