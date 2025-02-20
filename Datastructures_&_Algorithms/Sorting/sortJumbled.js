/**
 * **2191. Sort the Jumbled Numbers**
 *
 * You are given a **0-indexed** integer array `mapping` which represents
 * the mapping rule of a shuffled decimal system. `mapping[i] = j` means
 * digit `i` should be mapped to digit `j` in this system.
 *
 * The **mapped value** of an integer is the new integer obtained by
 * replacing each occurrence of digit `i` in the integer with `mapping[i]`
 * for all `0 <= i <= 9`.
 *
 * You are also given another integer array `nums`. Return *the array
 * `nums` sorted in **non-decreasing** order based on the **mapped values**
 * of its elements.*
 *
 * **Notes:**
 *
 * - Elements with the same mapped values should appear in the **same
 * relative** order as in the input.
 * - The elements of nums should only be sorted based on their mapped
 * values and **not be replaced** by them.
 *
 *
 * **Constraints:**
 *
 * - `mapping.length == 10`
 * - `0 <= mapping[i] <= 9`
 * - All the values of `mapping[i]` are unique.
 * - `1 <= nums.length <= 3 * 10^4`
 * - `0 <= nums[i] < 10^9`
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = function (mapping, nums) {
    // Function to map a number to its mapped value
    const mapNumber = (num) => {
        if (num === 0) return mapping[0];
        let mapped = 0;
        let power = 1;
        while (num > 0) {
            const digit = num % 10;
            mapped += mapping[digit] * power;
            power *= 10;
            num = Math.floor(num / 10);
        }
        return mapped;
    };

    // Create an array of objects containing the original number and its mapped value
    const numsWithMapped = nums.map((num) => ({
        original: num,
        mapped: mapNumber(num),
    }));

    // Sort the array based on the mapped value
    numsWithMapped.sort((a, b) => a.mapped - b.mapped);

    // Extract the original numbers in the sorted order
    return numsWithMapped.map((item) => item.original);
};
