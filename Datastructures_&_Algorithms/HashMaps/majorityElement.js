/**
 * **169. Majority Element**
 *
 * Given an array `nums` of size `n`, return *the majority element*.
 *
 * The majority element is the element that appears more than `⌊n / 2⌋`
 * times. You may assume that the majority element always exists in the
 * array.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 5 * 104`
 * - `-109 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const frequencyCounter = {};
    let maxValue = -Infinity;
    let maxKey = 0;

    for (let n of nums) {
        frequencyCounter[n] = frequencyCounter[n] + 1 || 1;
    }

    Object.keys(frequencyCounter).map((key) => {
        if (frequencyCounter[key] > maxValue) {
            maxKey = Number(key);
            maxValue = frequencyCounter[key];
        }
    });

    return maxKey;
};

const nums = [3, 2, 3];
// Output: 3
console.log(majorityElement(nums));
