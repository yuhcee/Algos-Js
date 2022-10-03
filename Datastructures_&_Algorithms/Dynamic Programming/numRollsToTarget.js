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

    let key = `${n},${target}`;

    if (key in memo) return memo[key];

    let count = 0,
        M = Math.pow(10, 9) + 7;

    for (let i = 1; i <= k; i++) {
        count = (count + numRollsToTarget(n - 1, k, target - i, memo)) % M;
    }

    memo[key] = count;

    return memo[key];
};

const n = 1,
    k = 6,
    target = 3;
// Output: 1
/* Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3. */
console.log(numRollsToTarget(n, k, target));

const n1 = 2,
    k1 = 6,
    target1 = 7;
// Output: 6
/* Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1. */
console.log(numRollsToTarget(n1, k1, target1));
