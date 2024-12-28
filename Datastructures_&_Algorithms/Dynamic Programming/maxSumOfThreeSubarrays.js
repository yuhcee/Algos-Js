/**
 * **689. Maximum Sum of 3 Non-Overlapping Subarrays**
 *
 * Given an integer array `nums` and an integer `k`, find three non-overlapping
 * subarrays of length k with maximum sum and return them.
 *
 * Return the result as a list of indices representing the starting position of
 * each interval (**0-indexed**). If there are multiple answers, return the
 * lexicographically smallest one.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 2 * 104`
 * - `1 <= nums[i] < 216`
 * - `1 <= k <= floor(nums.length / 3)`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarrays = function (nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    // Compute prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    // Helper to calculate sum of subarray [i, i + k - 1]
    const subarraySum = (i) => prefixSum[i + k] - prefixSum[i];

    // Arrays to store the best indices for one and two subarray cases
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    // Calculate the best left subarray for each position
    let maxSum = subarraySum(0);
    for (let i = k; i < n; i++) {
        if (subarraySum(i - k + 1) > maxSum) {
            maxSum = subarraySum(i - k + 1);
            left[i] = i - k + 1;
        } else {
            left[i] = left[i - 1];
        }
    }

    // Calculate the best right subarray for each position (reverse)
    maxSum = subarraySum(n - k);
    right[n - k] = n - k;
    for (let i = n - k - 1; i >= 0; i--) {
        if (subarraySum(i) >= maxSum) {
            maxSum = subarraySum(i);
            right[i] = i;
        } else {
            right[i] = right[i + 1];
        }
    }

    // Find the best three subarrays
    let result = [-1, -1, -1];
    maxSum = 0;
    for (let mid = k; mid <= n - 2 * k; mid++) {
        const l = left[mid - 1];
        const r = right[mid + k];
        const total = subarraySum(l) + subarraySum(mid) + subarraySum(r);
        if (total > maxSum) {
            maxSum = total;
            result = [l, mid, r];
        }
    }

    return result;
};

const nums = [1, 2, 1, 2, 6, 7, 5, 1],
    k = 2;
// Output: [0,3,5]
/* Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
 */
console.log(maxSumOfThreeSubarrays(nums, k));

const nums1 = [1, 2, 1, 2, 1, 2, 1, 2, 1],
    k1 = 2;
// Output: [0,2,4]
/* Explanation: Subarrays [1, 2], [1, 2], [1, 2] correspond to the starting indices [0, 2, 4].
 */
console.log(maxSumOfThreeSubarrays(nums1, k1));
