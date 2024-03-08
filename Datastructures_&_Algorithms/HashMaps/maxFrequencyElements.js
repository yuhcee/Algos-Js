/**
 * **3005. Count Elements With Maximum Frequency**
 *
 * You are given an array `nums` consisting of positive integers.
 *
 * Return *the **total frequencies** of elements in `nums` such that those
 * elements all have the **maximum** frequency.*
 *
 * The **frequency** of an element is the number of occurrences of that
 * element in the array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
    // Create a hashmap to count the frequency of each element
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Find the maximum frequency
    let maxFrequency = 0;
    for (const frequency of frequencyMap.values()) {
        maxFrequency = Math.max(maxFrequency, frequency);
    }

    // Count the total frequencies of elements having the maximum frequency
    let count = 0;
    for (const frequency of frequencyMap.values()) {
        if (frequency === maxFrequency) {
            count += frequency;
        }
    }

    return count;
};
