/**
 * **287. Find the Duplicate Number**
 *
 * Given an array of integers `nums` containing `n + 1` integers where
 * each integer is in the range `[1, n]` inclusive.
 *
 * There is only **one repeated number** in `nums`, return *this
 * repeated number*.
 *
 * You must solve the problem **without** modifying the array nums and
 * uses only constant extra space.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 * - `nums.length == n + 1`
 * - `1 <= nums[i] <= n`
 * - All the integers in `nums` appear only **once** except for
 * **precisely one integer** which appears two or more times.
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
    // Phase 1: Detecting the loop using Floyd's Tortoise and Hare
    let tortoise = nums[0];
    let hare = nums[0];

    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    // Phase 2: Find the position of the loop (duplicate number)
    hare = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return hare;
};
