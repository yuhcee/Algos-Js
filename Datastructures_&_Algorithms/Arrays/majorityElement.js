/**
 * **229. Majority Element II**
 *
 * Given an integer array of size `n`, find all elements that
 * appear more than `⌊ n/3 ⌋` times.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 5 * 104`
 * - `-109 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
    let count1 = 0,
        count2 = 0;
    let candidate1 = null,
        candidate2 = null;

    // Find candidates
    for (let num of nums) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Verify candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > nums.length / 3) result.push(candidate1);
    if (count2 > nums.length / 3) result.push(candidate2);
    return result;
};
const nums = [3, 2, 3];
// Output: [3]
console.log(majorityElement(nums));

const nums1 = [1];
// Output: [1]
console.log(majorityElement(nums1));
