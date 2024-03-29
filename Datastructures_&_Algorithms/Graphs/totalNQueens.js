/**
 * **52. N-Queens II**
 *
 * The *n-queens* puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack
 * each other.
 *
 * Given an integer `n`, return *the number of distinct solutions to the **n-queens puzzle***.
 *
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
    const cols = new Set(),
        posDiag = new Set(),
        negDiag = new Set();
    let solutionCount = 0;

    function computePositionForRow(row) {
        if (row === n) {
            solutionCount += 1;
            return;
        }

        for (let col = 0; col < n; col += 1) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) continue;

            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);

            computePositionForRow(row + 1);

            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }
    }
    computePositionForRow(0);
    return solutionCount;
};

const n = 4; // Output: 2
console.log(totalNQueens(n));

const n1 = 1; // Output: 1
console.log(totalNQueens(n1));
