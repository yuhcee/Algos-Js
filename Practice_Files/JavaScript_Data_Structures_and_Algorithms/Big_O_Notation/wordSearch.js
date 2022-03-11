/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or
 * vertically neighboring. The same letter cell may not be used more than once.
 */

const exist = function (board, word) {
    for (let r = 0; r < board.length; r += 1) {
        for (let c = 0; c < board[r].length; c += 1) {
            if (explore(board, r, c, word)) return true;
        }
    }

    return false;
};

const explore = (board, r, c, word, index = 0) => {
    if (index >= word.length) return true;

    const rowInbounds = 0 <= r && r < board.length;
    const colInbounds = 0 <= c && c < board[0].length;

    if (!rowInbounds || !colInbounds || board[r][c] !== word.charAt(index)) return false;

    let temp = board[r][c];
    board[r][c] = '';

    const found = explore(board, r + 1, c, word, index + 1) || 
                  explore(board, r - 1, c, word, index + 1) || 
                  explore(board, r, c + 1, word, index + 1) || 
                  explore(board, r, c - 1, word, index + 1);

    board[r][c] = temp;

    return found;
};

const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    word = 'ABCB';

const board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    word2 ="ABCCED";

console.log(exist(board, word));
console.log(exist(board2, word2));
