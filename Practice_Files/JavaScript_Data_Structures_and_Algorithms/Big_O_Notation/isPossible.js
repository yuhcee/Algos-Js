/**
 * **1354. Construct Target Array With Multiple Sums**
 *
 * You are given an array `target` of n integers. From a starting array `arr` consisting of `n` 1's, you may perform the
 * following procedure :
 *
 * - let `x` be the sum of all elements currently in your array.
 * - choose index `i`, such that `0 <= i < n` and set the value of `arr` at index `i` to `x`.
 * - You may repeat this procedure as many times as needed.
 *
 * Return *`true` if it is possible to construct the `target` array from `arr`, otherwise, return `false`*.
 *
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = (target) => {
    let max = 0,
        index = -1;

    for (let i = target.length - 1; i >= 0; i--) {
        if (target[i] > max) {
            max = target[i];
            index = i;
        }
    }
    // if max itself is 1 return true
    if (max === 1) return true;

    let total = 0;
    for (let i = 0; i < target.length; i++) {
        if (i !== index) total += target[i];
    }
};
