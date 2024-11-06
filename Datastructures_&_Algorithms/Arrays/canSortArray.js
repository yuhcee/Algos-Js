/**
 * **3011. Find if Array Can Be Sorted**
 *
 * You are given a **0-indexed** array of
 * **positive** integers `nums`.
 *
 * In one **operation**, you can swap any two
 * **adjacent** elements if they have the **same**
 * number of set bits. You are allowed to do this
 * operation **any** number of times (**including
 * zero**).
 *
 * Return *`true` if you can sort the array, else
 * return `false`*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 28`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canSortArray = function (nums) {
    // Function to count the number of set bits in binary representation of a number
    function setBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    // Helper function to check if the array is fully sorted
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    // Array to store the set bit count for each element
    const count = nums.map(setBits);

    // Iterate through the array, sorting adjacent elements with the same set bit count
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            // Swap if elements are in the wrong order but have the same set bit count
            if (count[j] === count[j - 1] && nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            }
        }
    }

    // Final check to see if the array is sorted
    return isSorted(nums);
};
