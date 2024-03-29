/**
 * **665. Non-decreasing Array**
 *
 * Given an array `nums` with `n` integers, your task is to check if it could become non-decreasing by modifying **at most one
 * element**.
 *
 * We define an array is non-decreasing if `nums[i] <= nums[i + 1]` holds for every `i` *(0-based)* such that `(0 <= i <= n - 2)`.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
    function isNonDecreasing(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            const currentValue = nums[i];

            // option 1
            nums[i] = nums[i + 1];
            const option1 = isNonDecreasing(nums);

            // reset
            nums[i] = currentValue;

            // option 2
            nums[i + 1] = nums[i];
            const option2 = isNonDecreasing(nums);

            return option1 || option2;
        }
    }
    return true;
};

const nums = [4, 2, 3];
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
console.log(checkPossibility(nums));

const nums2 = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.
console.log(checkPossibility(nums2));
