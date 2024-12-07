/**
 * **1760. Minimum Limit of Balls in a Bag**
 *
 * You are given an integer array `nums` where the `ith` bag contains `nums[i]`
 * balls. You are also given an integer `maxOperations`.
 *
 * You can perform the following operation at most `maxOperations` times:
 *
 * - Take any bag of balls and divide it into two new bags with a **positive**
 * number of balls.
 *  - For example, a bag of `5` balls can become two new bags of `1` and `4`
 * balls, or two new bags of `2` and `3` balls.
 *
 * Your penalty is the **maximum** number of balls in a bag. You want to
 * **minimize** your penalty after the operations.
 *
 * Return *the minimum possible penalty after performing the operations.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= maxOperations, nums[i] <= 109`
 *
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function (nums, maxOperations) {
    // Helper function to determine if a penalty is feasible
    const canDivide = (penalty) => {
        let operations = 0;
        for (const balls of nums) {
            operations += Math.ceil(balls / penalty) - 1;
            if (operations > maxOperations) return false;
        }
        return true;
    };

    // Binary search range for penalty
    let left = 1,
        right = Math.max(...nums);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canDivide(mid)) {
            result = mid; // Update result if feasible
            right = mid - 1; // Try smaller penalties
        } else {
            left = mid + 1; // Try larger penalties
        }
    }

    return result;
};
