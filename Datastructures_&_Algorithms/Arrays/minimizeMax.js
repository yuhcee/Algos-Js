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


