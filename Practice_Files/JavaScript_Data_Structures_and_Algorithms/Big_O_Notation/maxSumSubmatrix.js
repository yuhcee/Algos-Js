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

    }
    return maxSum;
};


