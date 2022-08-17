/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

 1. Each row must contain the digits 1-9 without repetition.
 2. Each column must contain the digits 1-9 without repetition.
 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

Note : 
 - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 - Only the filled cells need to be validated according to the mentioned rules.
 * @param {string[][]} board 
 */

const isValidSudoku = (board) => {
    const seen = new Set();

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            const value = board[r][c];

            if (value === '.') continue;

            const boxNum = 3 * Math.floor(r / 3) + Math.floor(c / 3);

            const inRow = `row: ${r}, ${value}`;
            const inCol = `col: ${c}, ${value}`;
            const inBox = `boxNum: ${boxNum}, ${value}`;

            if (seen.has(inRow) || seen.has(inCol) || seen.has(inBox)) return false;
            seen.add(inRow);
            seen.add(inCol);
            seen.add(inBox);
        }
    }

    return true;
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board));
// Output: true
const board2 = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board2));

// Output: false
