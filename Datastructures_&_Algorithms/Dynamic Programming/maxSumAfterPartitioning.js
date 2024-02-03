/**
 * **1043. Partition Array for Maximum Sum**
 *
 * Given an integer array `arr`, partition the array into (contiguous) subarrays
 * of length **at most** `k`. After partitioning, each subarray has their values
 * changed to become the maximum value of that subarray.
 *
 * Return the *largest sum of the given array after partitioning. Test cases are
 * generated so that the answer fits in a 32-bit integer*.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 500`
 * - `0 <= arr[i] <= 109`
 * - `1 <= k <= arr.length`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const maxSumAfterPartitioning = (arr, k) => {
    const n = arr.length;
    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let maxVal = 0;
        for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
            maxVal = Math.max(maxVal, arr[i - j + 1]);
            dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + maxVal * j);
        }
    }

    return dp[n - 1];
};

const arr = [1, 15, 7, 9, 2, 5, 10],
    k = 3;
// Output: 84
// Explanation: arr becomes [15,15,15,9,10,10,10]
console.log(maxSumAfterPartitioning(arr, k));

const arr1 = [1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3],
    k1 = 4;
// Output: 83
console.log(maxSumAfterPartitioning(arr1, k1));

const arr2 = [1],
    k2 = 1;
// Output: 1
console.log(maxSumAfterPartitioning(arr2, k2));
