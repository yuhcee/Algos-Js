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
            total -= nums[start];
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

console.log(minSubArrayLen([], 2));
console.log(minSubArrayLen([1, 2, 3, 4], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
