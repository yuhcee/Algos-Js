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
        // if current window adds up to at least the sum given then
        else if (total >= sum) {
            minLen = min(minLen, end - start);
            // we can shrink the window
            total -= num[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }
    // return minLen
    return minLen === Infinity ? 0 : minLen;
};
