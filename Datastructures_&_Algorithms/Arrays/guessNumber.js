/**
 * **374. Guess Number Higher or Lower**
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from `1` to `n`. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API `int guess(int num)`, which returns three possible results:
 *
 * - `-1`: Your guess is higher than the number I picked (i.e. `num > pick`).
 * - `1`: Your guess is lower than the number I picked (i.e. `num < pick`).
 * - `0`: your guess is equal to the number I picked (i.e. `num == pick`).
 *
 * Return *the number that I picked*.
 *
 * **Constraints:**
 * - `1 <= n <= 231 - 1`
 * - `1 <= pick <= n`
 *
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
    const helperRecursive = (low, high) => {
        const mid = Math.floor((low + high) / 2);

        if (guess(mid) === 0) return mid;
        if (guess(mid) === 1) return helperRecursive(mid + 1, high);
        if (guess(mid) === -1) return helperRecursive(low, mid - 1);
    };

    return helperRecursive(0, n);
};
