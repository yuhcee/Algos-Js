/**
 * **363. Max Sum of Rectangle No Larger Than K**
 *
 * Given an `m x n` matrix `matrix` and an integer `k`, return *the max sum of a rectangle in the matrix
 * such that its sum is no larger than `k`*.
 *
 * It is **guaranteed** that there will be a rectangle with a sum no larger than k.
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const maxSumSubmatrix = function (matrix, k) {
    const rowNums = matrix.length,
        colNums = matrix[0].length;
    let maxSum = -Infinity;

    for (let l = 0; l < rowNums; l++) {
        const dp = Array(colNums).fill(0);

        for (let r = l; r < rowNums; r++) {
            let sum = 0,
                max = -Infinity;

            for (let c = 0; c < colNums; c++) {
                // build running dp array
                dp[c] += matrix[r][c];

                // implement kadane's algorithm
                if (sum < 0) sum = 0;
                sum += dp[c];
                max = Math.max(max, sum);
            }

            // if max <= k take kadane's algorithm
            if (max <= k) maxSum = Math.max(max, maxSum);
            else {
                // if max > k find the max subarray sum no larger than k
                max = -Infinity;

                for (let c = 0; c < colNums; c++) {
                    sum = 0;

                    for (let d = c; d < colNums; d++) {
                        sum += dp[d];
                        if (sum <= k) max = Math.max(sum, max);
                    }
                }
                maxSum = Math.max(max, maxSum);
            }
            if (maxSum === k) return k; // short circuit
        }
    }
    return maxSum;
};

const matrix = [
    [1, 0, 1],
    [0, -2, 3],
],
k = 2;
// Output: 2
/* Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2). */
console.log(maxSumSubmatrix(matrix, k));
