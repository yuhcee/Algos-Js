/**
 * **2337. Move Pieces to Obtain a String**
 *
 * You are given two strings `start` and `target`, both of length `n`. Each
 * string consists only of the characters `'L'`, `'R'`, and `'_'` where:
 *
 * - The characters `'L'` and `'R'` represent pieces, where a piece `'L'` can
 * move to the left only if there is a blank space directly to its left, and a
 * piece `'R'` can move to the right only if there is a **blank** space
 * directly to its right.
 * - The character `'_'` represents a blank space that can be occupied by any
 * of the `'L'` or `'R'` pieces.
 *
 * Return *`true` if it is possible to obtain the string `target` by moving the
 * pieces of the string `start` **any** number of times. Otherwise, return
 * `false`*.
 *
 * **Constraints:**
 *
 * - `n == start.length == target.length`
 * - `1 <= n <= 105`
 * - `start` and `target` consist of the characters `'L'`, `'R'`, and `'_'`.
 *
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
const canChange = function (start, target) {
    // Remove all the '_' characters from both strings
    const startPieces = start.replace(/_/g, '');
    const targetPieces = target.replace(/_/g, '');

    // If the sequence of 'L' and 'R' doesn't match, return false
    if (startPieces !== targetPieces) return false;

    let i = 0,
        j = 0;

    // Iterate through both strings to check movement rules
    while (i < start.length && j < target.length) {
        // Skip blanks in both strings
        while (i < start.length && start[i] === '_') i++;
        while (j < target.length && target[j] === '_') j++;

        // If both pointers are within bounds
        if (i < start.length && j < target.length) {
            // Check if movement rules are violated
            if (start[i] === 'L' && i < j) return false; // 'L' can't move right
            if (start[i] === 'R' && i > j) return false; // 'R' can't move left

            // Move to the next piece
            i++;
            j++;
        }
    }

    return true;
};

const start = '_L__R__R_',
    target = 'L______RR';
// Output: true
/* Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to "L___R__R_".
- Move the last piece one step to the right, start becomes equal to "L___R___R".
- Move the second piece three steps to the right, start becomes equal to "L______RR".
Since it is possible to get the string target from start, we return true. */
console.log(canChange(start, target));

const start1 = 'R_L_',
    target1 = '__LR';
// Output: false
/* Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
After that, no pieces can move anymore, so it is impossible to obtain the string target from start. */
console.log(canChange(start1, target1));

const start2 = '_R',
    target2 = 'R_';
// Output: false
/* Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start. */
console.log(canChange(start2, target2));
