/**
 * **838. Push Dominoes**
 *
 * There are `n` dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some
 * of the dominoes either to the left or to the right.
 *
 * After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes
 * falling to the right push their adjacent dominoes standing on the right.
 *
 * When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
 *
 * For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already
 * fallen domino.
 *
 * You are given a string `dominoes` representing the initial state where:
 *
 * `dominoes[i] = 'L'`, if the `ith` domino has been pushed to the left,
 * `dominoes[i] = 'R'`, if the `ith` domino has been pushed to the right, and
 * `dominoes[i] = '.'`, if the `ith` domino has not been pushed.
 *
 * Return *a string representing the final state*.
 *
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
    dominoes = 'L' + dominoes + 'R';
    const arr = dominoes.split(''),
        n = dominoes.length;

    for (let l = 0, r = 1; r < n; r++) {
        if (arr[r] === '.') continue;

        if (arr[r] === 'L' && arr[l] === 'R')
            for (let i = l + 1, j = r - 1; j - i && i < j; i++, j--) {
                (arr[i] = 'R'), (arr[j] = 'L');
            }

        // handle both corner cases
        if (arr[l] === arr[r]) for (let i = l; i < r; i++) arr[i] = arr[r];

        l = r;
    }

    return arr.slice(1, n - 1).join('');
};
const dominoes = 'RR.L';
// Output: "RR.L"
// Explanation: The first domino expends no additional force on the second domino.
console.log(pushDominoes(dominoes));

const dominoes1 = '.L.R...LR..L..';
// Output: "LL.RR.LLRRLL.."
console.log(pushDominoes(dominoes1));
