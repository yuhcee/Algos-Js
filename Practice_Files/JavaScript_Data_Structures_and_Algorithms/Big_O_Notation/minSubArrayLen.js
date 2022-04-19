/**
 * Write a function called **minSubArrayLen** which accepts two parameters - an array of positive integers
 *`nums` and a positive integer `sum`.
 *
 * The function should return *the minimum length of a **contigous** subarray of which the sum is greater
 * than or equal to the integer* passed to the function. If there isn't one, return 0 instead.
 *
 * @param {*} nums
 * @param {*} sum
 */
const minSubArrayLen = (nums, sum) => {
    // init variables
    let start = 0,
        end = 0,
        total = 0,
        minLen = Infinity;
    const { min } = Math;

    // begin sliding window
    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        if (total < sum && end < nums.length) {
            total += nums[end];
            // move the window to right
            end++;
        }
    }
};
