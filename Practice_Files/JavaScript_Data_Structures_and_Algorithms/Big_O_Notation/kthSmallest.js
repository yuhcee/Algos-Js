/**
 * 378. Kth Smallest Element in a Sorted Matrix
 *
 * Given an `n x n` matrix where each of the rows and columns is sorted in ascending order, return *the
 * `kth` smallest element in the matrix*.
 *
 * Note that it is the `kth` smallest element **in the sorted order**, not the `kth` **distinct** element
 *
 * You must find a solution with a memory complexity better than `O(n2)`.
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
    return matrix.flat().sort((a, b) => a - b)[k - 1];
};

const matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
    ],
    k = 8;
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
console.log(kthSmallest(matrix, k));

const matrix1 = [[-5]],
    k1 = 1;
// Output: -5
console.log(kthSmallest(matrix1, k1));
