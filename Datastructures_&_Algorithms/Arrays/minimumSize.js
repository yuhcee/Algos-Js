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

const nums = [9],
    maxOperations = 2;
// Output: 3
/* Explanation: 
- Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
- Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3. */
console.log(minimumSize(nums, maxOperations));

const nums1 = [2, 4, 8, 2],
    maxOperations1 = 4;
// Output: 2
/* Explanation:
- Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
- Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
The bag with the most number of balls has 2 balls, so your penalty is 2, and you should return 2. */
console.log(minimumSize(nums1, maxOperations1));
