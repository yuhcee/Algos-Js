/**
 * **2616. Minimize the Maximum Difference of Pairs**
 *
 * You are given a **0-indexed** integer array `nums` and an integer `p`. Find `p`
 * pairs of indices of `nums` such that the **maximum** difference amongst all the
 * pairs is **minimized**. Also, ensure no index appears more than once amongst the
 * `p` pairs.
 *
 * Note that for a pair of elements at the index `i` and `j`, the difference of
 * this pair is `|nums[i] - nums[j]|`, where `|x|` represents the **absolute
 * value** of `x`.
 *
 * Return *the **minimum maximum** difference among all `p` pairs*. We define the
 * maximum of an empty set to be zero.
 *
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 109`
 * - `0 <= p <= (nums.length)/2`
 *
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minimizeMax = function minimizeMax(nums, p) {
    // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize the left and right pointers for binary search
    let left = 0,
        right = nums[nums.length - 1] - nums[0];

    // Perform binary search to find the minimum maximum difference
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if it's possible to form p pairs with maximum difference <= mid
        if (canFormPairs(nums, mid, p)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

/**
 * Check if it's possible to form p pairs with maximum difference <= maxDiff
 * @param {number[]} nums - Sorted array of integers
 * @param {number} maxDiff - Maximum allowed difference between pairs
 * @param {number} p - Number of pairs to form
 * @return {boolean} - True if p pairs can be formed, False otherwise
 */
function canFormPairs(nums, maxDiff, p) {
    let count = 0;
    for (let i = 0; i < nums.length - 1 && count < p; ) {
        // If the difference between consecutive elements is <= maxDiff,
        // increment the count and move to the next pair
        if (nums[i + 1] - nums[i] <= maxDiff) {
            count++;
            i += 2; // Skip to the next possible pair
        } else {
            i++;
        }
    }
    return count >= p;
}

const nums = [10, 1, 2, 7, 1, 3],
    p = 2;
// Output: 1
/* Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1. */
console.log(minimizeMax(nums, p));

const nums1 = [4, 2, 1, 2],
    p1 = 1;
// Output: 0
/* Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain. */
console.log(minimizeMax(nums1, p1));
