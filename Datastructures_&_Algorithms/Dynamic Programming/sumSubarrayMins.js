/**
 * **907. Sum of Subarray Minimums**
 *
 * Given an array of integers arr, find the sum of `min(b)`, where `b`
 * ranges over every (contiguous) subarray of`arr`.
 *
 * Since the answer may be large, return the answer **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * `1 <= arr.length <= 3 * 104`
 * `1 <= arr[i] <= 3 * 104`
 *
 * @param {number[]} arr
 * @return {number}
 *
 */
var sumSubarrayMins = function (arr) {
    const MOD = 1e9 + 7;
    let result = 0;
    const stack = [];
    const left = new Array(arr.length);
    const right = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        left[i] = i + 1;
        right[i] = arr.length - i;
    }

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
            const popIndex = stack.pop();
            right[popIndex] = i - popIndex;
        }
        stack.push(i);
    }

    stack.length = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            const popIndex = stack.pop();
            left[popIndex] = popIndex - i;
        }
        stack.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        result = (result + arr[i] * left[i] * right[i]) % MOD;
    }

    return result;
};

const arr = [3, 1, 2, 4];
// Output: 17
/* Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17. */
console.log(sumSubarrayMins(arr));

const arr1 = [11, 81, 94, 43, 3];
// Output: 444
console.log(sumSubarrayMins(arr1));
