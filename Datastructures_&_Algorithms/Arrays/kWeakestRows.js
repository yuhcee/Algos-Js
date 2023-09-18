/**
 * **1337. The K Weakest Rows in a Matrix**
 *
 * You are given an `m x n` binary matrix `mat` of `1`'s (representing soldiers) and `0`'s
 * (representing civilians). The soldiers are positioned **in front** of the civilians. That is,
 * all the `1`'s will appear to the left of all the `0`'s in each row.
 *
 * A row `i` is **weaker** than a row `j` if one of the following is true:
 *
 * - The number of soldiers in row `i` is less than the number of soldiers in row `j`.
 * - Both rows have the same number of soldiers and `i < j`.
 * - Return *the indices of the `k` **weakest** rows in the matrix ordered from weakest to
 * strongest**.
 *
 * **Constraints:**
 *
 * - `m == mat.length`
 * - `n == mat[i].length`
 * - `2 <= n, m <= 100`
 * - `1 <= k <= m`
 * - `matrix[i][j]` is either 0 or 1.
 *
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
    // Create an array of pairs [index, number of soldiers]
    let rows = mat.map((row, index) => [index, row.reduce((a, b) => a + b, 0)]);

    // Sort the array based on the number of soldiers and then by index
    rows.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    // Extract the first k indices
    return rows.slice(0, k).map((row) => row[0]);
};

const mat = [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    k = 3;
// Output: [2,0,3]
/* Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4]. */
console.log(kWeakestRows(mat, k));

const mat1 = [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
    ],
    k1 = 2;
// Output: [0,2]
/* Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1]. */
console.log(kWeakestRows(mat1, k1));
