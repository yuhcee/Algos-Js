/**
 * **907. Sum of Subarray Minimums**
 *
 * Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of
 * `arr`.
 * Since the answer may be large, return the answer **modulo** `109 + 7`.
 *
 * **Constraints:**
 * 
 * `1 <= arr.length <= 3 * 104`
 * `1 <= arr[i] <= 3 * 104`
 * 
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const MOD = Math.pow(10, 9) + 7;
    const n = arr.length;
    const stack = [];
    const leftBound = new Array(n).fill(-1);
    const rightBound = new Array(n).fill(n);

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const idx = stack.pop();
            rightBound[idx] = i;
        }
        if (stack.length > 0) leftBound[i] = stack[stack.length - 1];

        stack.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const countLeft = i - leftBound[i];
        const countRight = rightBound[i] - i;
        const result = arr[i] * countLeft * countRight;

        ans += result;
    }

    return ans % MOD;
};
