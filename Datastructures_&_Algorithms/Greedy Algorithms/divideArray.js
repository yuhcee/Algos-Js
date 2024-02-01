/**
 * **2966. Divide Array Into Arrays With Max Difference**
 *
 * You are given an integer array `nums` of size `n` and a positive integer `k`.
 *
 * Divide the array into one or more arrays of size `3` satisfying the following
 * conditions:
 *
 * - **Each** element of `nums` should be in **exactly** one array.
 * - The difference between **any** two elements in one array is less than or
 * equal to `k`.
 *
 * Return *a **2D** array containing all the arrays. If it is impossible to
 * satisfy the conditions, return an empty array. And if there are multiple
 * answers, return **any** of them*.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 105`
 * - `n` is a multiple of `3`.
 * - `1 <= nums[i] <= 105`
 * - `1 <= k <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
const divideArray = (nums, k) => {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const result = [];
    let currentSubarray = [];

    for (let i = 0; i < n; i++) {
        currentSubarray.push(nums[i]);
        if (currentSubarray.length === 3 || i === n - 1 || nums[i + 1] - currentSubarray[0] > k) {
            if (currentSubarray.length !== 3) {
                return []; // If any subarray does not have exactly 3 elements, return an empty array
            }
            result.push(currentSubarray);
            currentSubarray = [];
        }
    }

    return result;
};

const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1],
    k = 2;
// Output: [[1,1,3],[3,4,5],[7,8,9]]
/* Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important. */
console.log(divideArray(nums, k));

const nums1 = [1, 3, 3, 2, 7, 3],
    k1 = 3;
// Output: []
// Explanation: It is not possible to divide the array satisfying all the conditions.
console.log(divideArray(nums1, k1));
