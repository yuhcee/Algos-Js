/**
 * **41. First Missing Positive**
 *
 * Given an unsorted integer array `nums`. Return the smallest positive integer
 * that is not present in `nums`.
 *
 * You must implement an algorithm that runs in `O(n)` time and uses `O(1)`
 * auxiliary space.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-231 <= nums[i] <= 231 - 1`
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
    // Perform cyclic sort
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[nums[i] - 1]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i++;
        }
    }

    // Find the first missing positive integer
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
};

const nums = [1, 2, 0];
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
console.log(firstMissingPositive(nums));
