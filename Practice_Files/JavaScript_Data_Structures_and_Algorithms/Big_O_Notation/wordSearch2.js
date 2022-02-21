/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are
 * horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 *
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]} words
 */

const findWords = (board, words) => {
    return words.filter((word) => exist(board, word) && word);
};

const exist = (board, word) => {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === word.charAt(0) && explore(board, r, c, word) === true) return true;
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
    board[r][c] = '$';

    const found = explore(board, r + 1, c, word, index + 1) || explore(board, r, c + 1, word, index + 1) || explore(board, r - 1, c, word, index + 1) || explore(board, r, c - 1, word, index + 1);

    board[r][c] = temp;

    return found;
};

const board = [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
    ],
    words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words));
