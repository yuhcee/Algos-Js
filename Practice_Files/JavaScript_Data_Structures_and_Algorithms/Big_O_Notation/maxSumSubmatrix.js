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

                
            }
        }
    }
    return maxSum;
};


