/**
 * **944. Delete Columns to Make Sorted**
 *
 * You are given an array of `n` strings `strs`, all of the same length.
 *
 * The strings can be arranged such that there is one on each line,
 * making a grid.
 *
 * - For example, `strs = ["abc", "bce", "cae"]` can be arranged as
 * follows:
 *
 * ```
 * abc
 * bce
 * cae
 * ```
 *
 * You want to delete the columns that are **not sorted lexicographically**. In the
 * above example (**0-indexed**), columns 0 (`'a'`, `'b'`, `'c'`) and 2 (`'c'`,
 * `'e'`, 'e') are sorted, while column 1 (`'b'`, `'c'`, `'a'`) is not, so you would
 * delete column `1`.
 *
 * Return *the number of columns that you will delete*.
 *
 * **Constraints:**
 *
 * - `n == strs.length`
 * - `1 <= n <= 100`
 * - `1 <= strs[i].length <= 1000`
 * - `strs[i]` consists of lowercase English letters.
 *
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function (strs) {
    let count = 0;
    let row = strs.length;
    let col = strs[0].length;

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                count++;

                break;
            }
        }
    }

    return count;
};

const strs = ['cba', 'daf', 'ghi'];
// Output: 1;
/* Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column. */
console.log(minDeletionSize(strs));

const strs1 = ['a', 'b'];
// Output: 0
/* Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns. */
console.log(minDeletionSize(strs1));
