/**
 * **1155. Number of Dice Rolls With Target Sum**
 *
 * You have `n` dice and each die has `k` faces numbered from `1` to `k`.
 *
 * Given three integers `n`, `k`, and `target`, return *the number of possible ways (out of the `kn` total ways) to roll
 * the dice so the sum of the face-up numbers equals `target`*. Since the answer may be too large, return it **modulo**
 * `109 + 7`.
 *
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = function (n, k, target, memo = {}) {
    if (n === 0 && target === 0) return 1;
    if (n === 0 || target <= 0) return 0;
};
