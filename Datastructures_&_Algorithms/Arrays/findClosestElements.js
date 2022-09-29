/**
 * **658. Find K Closest Elements**
 *
 * Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result
 * should also be sorted in ascending order.
 *
 * An integer `a` is closer to `x` than an integer `b` if:
 *
 * - `|a - x| < |b - x|`, or
 * - `|a - x| == |b - x|` and `a < b`
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
    // Initialize binary search bounds
    let left = 0,
        right = arr.length - k;

    // Binary search against the criteria described
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Create output in correct format
    let result = [];
    for (let i = left; i < left + k; i++) {
        result.push(arr[i]);
    }

    return result;
};

const arr = [1, 2, 3, 4, 5],
    k = 4,
    x = 3;
// Output: [1,2,3,4]
console.log(findClosestElements(arr, k, x));
