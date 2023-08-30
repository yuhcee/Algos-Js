/**
 * **2366. Minimum Replacements to Sort the Array**
 * 
 * You are given a 0-indexed integer array nums. In one operation you can replace any element of the array with any two elements that sum to it.

For example, consider nums = [5,6,7]. In one operation, we can replace nums[1] with 2 and 4 and convert nums to [5,2,4,7].
Return the minimum number of operations to make an array that is sorted in non-decreasing order.
 * 
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


 * @param {number[]} nums
 * @return {number}
 */
const minimumReplacement = function (nums) {
    const n = nums.length;
    let last = nums[n - 1]; // Initialize 'last' with the last element
    let ans = 0; // Initialize the total operations count

    // Traverse the array in reverse order
    for (let i = n - 2; i >= 0; --i) {
        if (nums[i] > last) {
            // If the current element needs replacement
            let t = Math.floor(nums[i] / last); // Calculate how many times the element needs to be divided
            if (nums[i] % last !== 0) {
                t++; // If there's a remainder, increment 't'
            }
            last = Math.floor(nums[i] / t); // Update 'last' for the next comparison
            ans += t - 1; // Add (t - 1) to 'ans' for the number of operations
        } else {
            last = nums[i]; // Update 'last' without replacement
        }
    }
    return ans; // Return the total number of operations
};

const nums = [3, 9, 3];
// Output: 2
// Explanation: Here are the steps to sort the array in non-decreasing order:
// - From [3,9,3], replace the 9 with 3 and 6 so the array becomes [3,3,6,3]
// - From [3,3,6,3], replace the 6 with 3 and 3 so the array becomes [3,3,3,3,3]
// There are 2 steps to sort the array in non-decreasing order. Therefore, we return 2.
console.log(minimumReplacement(nums));
