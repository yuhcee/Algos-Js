/**
 * **1498. Number of Subsequences That Satisfy the Given Sum Condition**
 *
 * You are given an array of integers `nums` and an integer `target`.
 *
 * Return *the number of **non-empty** subsequences of `nums` such that the sum of the minimum
 * and maximum element on it is less or equal to `target`. Since the answer may be too large,
 * return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 * - `1 <= target <= 106`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function (nums, target) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    let count = 0;

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Calculate the powers of 2 modulo MOD
    const powersOfTwo = [1];
    for (let i = 1; i <= n; i++) {
        powersOfTwo[i] = (powersOfTwo[i - 1] * 2) % MOD;
    }

    // Use two pointers to find the subsequences
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        // If the sum of the minimum and maximum element is greater than target,
        // move the right pointer to the left
        if (nums[left] + nums[right] > target) {
            right--;
        }
        // Otherwise, we can form subsequences using the left element and any element
        // from the range [left, right]. The number of subsequences is equal to the
        // number of elements in the range [left, right], which is (right - left + 1).
        // Add this count to the result and move the left pointer to the right.
        else {
            count = (count + powersOfTwo[right - left]) % MOD;
            left++;
        }
    }

    return count;
};

const nums = [3, 5, 6, 7],
    target = 9;
// Output: 4
/* Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9) */
console.log(numSubseq(nums, target));

const nums1 = [3, 3, 6, 8],
    target1 = 10;
// Output: 6
/* Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6] */
console.log(numSubseq(nums1, target1));
