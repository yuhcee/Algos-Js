/**
 * **1052. Grumpy Bookstore Owner**
 *
 * There is a bookstore owner that has a store open for `n` minutes. Every
 * minute, some number of customers enter the store. You are given an integer
 * array `customers` of length n where `customers[i]` is the number of the
 * customer that enters the store at the start of the `ith` minute and all those
 * customers leave after the end of that minute.
 *
 * On some minutes, the bookstore owner is grumpy. You are given a binary array
 * grumpy where `grumpy[i]` is 1 if the bookstore owner is grumpy during the
 * `ith` minute, and is `0` otherwise.
 *
 * When the bookstore owner is grumpy, the customers of that minute are not
 * satisfied, otherwise, they are satisfied.
 *
 * The bookstore owner knows a secret technique to keep themselves not grumpy
 * for `minutes` consecutive minutes, but can only use it once.
 *
 * Return *the maximum number of customers that can be satisfied throughout the
 * day*.
 *
 * **Constraints:**
 *
 * - `n == customers.length == grumpy.length`
 * - `1 <= minutes <= n <= 2 * 104`
 * - `0 <= customers[i] <= 1000`
 * - `grumpy[i]` is either `0` or `1`.
 *
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, minutes) {
    let n = customers.length;
    let satisfied = 0;

    // Calculate initially satisfied customers
    for (let i = 0; i < n; i++) {
        if (!grumpy[i]) {
            satisfied += customers[i];
        }
    }

    // Calculate the initial extra customers that can be satisfied using the technique
    let extraSatisfied = 0;
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
            extraSatisfied += customers[i];
        }
    }

    // Use a sliding window to find the maximum extra satisfied customers
    let maxExtraSatisfied = extraSatisfied;
    for (let i = minutes; i < n; i++) {
        if (grumpy[i]) {
            extraSatisfied += customers[i];
        }
        if (grumpy[i - minutes]) {
            extraSatisfied -= customers[i - minutes];
        }
        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }

    return satisfied + maxExtraSatisfied;
};
