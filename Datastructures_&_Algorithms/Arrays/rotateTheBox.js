/**
 * **1861. Rotating the Box**
 *
 * You are given an `m x n` matrix of characters `box` representing a side-view
 * of a box. Each cell of the box is one of the following:
 *
 * - A stone `'#'`
 * - A stationary obstacle `'*'`
 * - Empty `'.'`
 *
 * The box is rotated **90 degrees clockwise**, causing some of the stones to
 * fall due to gravity. Each stone falls down until it lands on an obstacle,
 * another stone, or the bottom of the box. Gravity **does not** affect the
 * obstacles' positions, and the inertia from the box's rotation does not
 * affect the stones' horizontal positions.
 *
 * It is **guaranteed** that each stone in `box` rests on an obstacle, another
 * stone, or the bottom of the box.
 *
 * Return *an `n x m` matrix representing the box after the rotation described
 * above.*
 *
 * **Constraints:**
 *
 * - `m == box.length`
 * - `n == box[i].length`
 * - `1 <= m, n <= 500`
 * - `box[i][j]` is either `'#'`, `'*'`, or `'.'`.
 *
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function (box) {
    const m = box.length;
    const n = box[0].length;

    // Step 1: Apply gravity to each row
    for (let row = 0; row < m; row++) {
        let emptyIndex = n - 1; // Position where the next stone should fall
        for (let col = n - 1; col >= 0; col--) {
            if (box[row][col] === '*') {
                emptyIndex = col - 1; // Stones can't fall past an obstacle
            } else if (box[row][col] === '#') {
                box[row][col] = '.';
                box[row][emptyIndex] = '#';
                emptyIndex--;
            }
        }
    }

    // Step 2: Rotate the box 90 degrees clockwise
    const rotated = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            rotated[col][m - 1 - row] = box[row][col];
        }
    }

    return rotated;
};

const box = [['#', '.', '#']];
// Output: [['.'], ['#'], ['#']];
console.log(rotateTheBox(box));

const box1 = [
    ['#', '.', '*', '.'],
    ['#', '#', '*', '.'],
];
/* Output: [
    ['#', '.'],
    ['#', '#'],
    ['*', '*'],
    ['.', '.'],
]; */
console.log(rotateTheBox(box1));
