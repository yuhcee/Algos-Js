/**
 * **912. Sort an Array**
 *
 * Given an array of integers `nums`, sort the array in ascending order and return it.
 *
 * You must solve the problem **without using any built-in** functions in `O(nlog(n))` time
 * complexity and with the smallest space complexity possible.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 5 * 104`
 * - `-5 * 104 <= nums[i] <= 5 * 104`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
    // Define a recursive function that partitions the array and sorts its two parts.
    function partition(low, high) {
        if (low >= high) return; // Base case: nothing to sort.
        let pivot = nums[low]; // Choose the first element as pivot.
        let i = low; // Start from the first element.
        let j = high; // Start from the last element.
        let k = low; // Pointer for the equal partition.
        while (i <= j) {
            if (nums[i] < pivot) {
                [nums[i], nums[k]] = [nums[k], nums[i]]; // Swap with the first element of the equal partition.
                k++;
                i++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap with the last element of the greater partition.
                j--;
            } else {
                i++; // Element is already in the equal partition.
            }
        }
        // Recursively sort the smaller and greater partitions.
        partition(low, k - 1);
        partition(j + 1, high);
    }
    // Call the partition function on the whole array.
    partition(0, nums.length - 1);

    return nums;
};

const nums = [5, 2, 3, 1];
// Output: [1,2,3,5]
/* Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5). */
console.log(sortArray(nums));

const nums1 = [5, 1, 1, 2, 0, 0];
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
console.log(sortArray(nums1));
