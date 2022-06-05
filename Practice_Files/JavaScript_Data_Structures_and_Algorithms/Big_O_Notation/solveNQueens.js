/**
 * **51. N-Queens**
 * The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack
 * each other.
 *
 * Given an integer `n`, return *all distinct solutions to the **n-queens puzzle***. You may return the answer in **any
 * order**.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both
 * indicate a queen and an empty space, respectively.
 *
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
    const solutions = [];

    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();

    const board = Array.from({ length: n }, () => new Array(n).fill('.'));

    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map((a) => a.join('')));
            return;
        }

        for (let col = 0; col < n; col += 1) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }

            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = 'Q';

            backtrack(row + 1);

            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = '.';
        }
    }

    backtrack(0);

    return solutions;
};
