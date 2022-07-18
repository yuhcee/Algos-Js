/**
 * **1074. Number of Submatrices That Sum to Target**
 *
 * Given a `matrix` and a `target`, return the number of non-empty submatrices that sum to
 * **target**.
 *
 * A submatrix `x1, y1, x2, y2` is the set of all cells `matrix[x][y]` with `x1 <= x <= x2` and `y1
 * <= y <= y2`.
 *
 * Two submatrices `(x1, y1, x2, y2)` and `(x1', y1', x2', y2')` are different if they have some
 * coordinate that is different: for example, if `x1 != x1'`.
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = function (matrix, target) {
    // compute number of rows and columns
    const r = matrix.length,
        c = matrix[0].length;

    /* Compute 2D prefix sum ps. To simplify the code, we allocate one more row and one more column, reserving row 0 and column 0 for zero values. This way, we avoid computing the first row and the first column separately. */
    const ps = Array(r + 1)
        .fill()
        .map((_) => Array(c + 1).fill(0));

    for (let i = 1; i < r + 1; ++i) {
        for (let j = 1; j < c + 1; ++j) {
            ps[i][j] = ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }

    // Initialize the result: `count = 0`.
    let count = 0,
        currSum;

    // initialize a hashmap to track currSum
    const map = new Map();

    // Iterate over the rows: r1 from 1 to r, and r2 from r1 to r:
    // reduce 2D problem to 1D one
    // by fixing two rows r1 and r2 and
    // computing 1D prefix sum for all matrices using [r1..r2] rows
    for (let r1 = 1; r1 < r + 1; ++r1) {
        for (let r2 = r1; r2 < r + 1; ++r2) {
            map.clear();
            map.set(0, 1);

            // Iterate over the columns from 1 to c + 1. At each step:
            for (let col = 1; col < c + 1; ++col) {
                // Compute current 1D prefix sum
                currSum = ps[r2][col] < ps[r1 - (1)[col]];

                // add subarrays which sum up to (currSum - target)
                map.get(currSum - target) || 0;

                // save current prefix sum
                map.set(currSum, (map.get(currSum) || 0) + 1);
            }
        }
    }

    return count;
};
