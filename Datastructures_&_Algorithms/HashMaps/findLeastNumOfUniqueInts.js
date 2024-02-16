/**
 * **1481. Least Number of Unique Integers after K Removals**
 *
 * Given an array of integers `arr` and an integer `k`. Find *the least
 * number of unique integers after removing **exactly** `k` elements.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 10^5`
 * - `1 <= arr[i] <= 10^9`
 * - `0 <= k <= arr.length`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
    const frequencyMap = new Map();

    // Step 1: Count the frequency of each integer
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Sort the unique integers by their frequency in ascending order
    const sortedUniqueIntegers = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(a) - frequencyMap.get(b));

    // Step 3: Iterate through the sorted unique integers and remove elements greedily until k elements have been removed
    let uniqueCount = sortedUniqueIntegers.length;
    for (const num of sortedUniqueIntegers) {
        if (k >= frequencyMap.get(num)) {
            k -= frequencyMap.get(num);
            uniqueCount--;
        } else {
            break;
        }
    }

    // Step 4: Return the number of remaining unique integers
    return uniqueCount;
};

const arr = [5, 5, 4],
    k = 1;
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
console.log(findLeastNumOfUniqueInts(arr, k));
