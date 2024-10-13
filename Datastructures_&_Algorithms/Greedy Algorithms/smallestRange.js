/**
 * **632. Smallest Range Covering Elements from K Lists**
 *
 * You have `k` lists of sorted integers in **non-decreasing order**. Find the
 * **smallest** range that includes at least one number from each of the `k`
 * lists.
 *
 * We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d -
 * c` **or** `a < c` if `b - a == d - c`.
 *
 * **Constraints:**
 *
 * - `nums.length == k`
 * - `1 <= k <= 3500`
 * - `1 <= nums[i].length <= 50`
 * - `-105 <= nums[i][j] <= 105`
 * - `nums[i]` is sorted in **non-decreasing** order.
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = function (nums) {
    const heap = new MinPriorityQueue({ priority: (x) => x[0] }); // heap to store the current smallest element
    let currentMax = -Infinity;
    let rangeStart = 0,
        rangeEnd = Infinity;

    // Step 1: Initialize the heap with the first element from each list
    for (let i = 0; i < nums.length; i++) {
        heap.enqueue([nums[i][0], i, 0]); // [value, listIndex, indexInList]
        currentMax = Math.max(currentMax, nums[i][0]);
    }

    // Step 2: Process the heap to find the smallest range
    while (heap.size() === nums.length) {
        const [minValue, listIndex, indexInList] = heap.dequeue().element;

        // Update the smallest range if this range is smaller
        if (currentMax - minValue < rangeEnd - rangeStart) {
            rangeStart = minValue;
            rangeEnd = currentMax;
        }

        // Move to the next element in the list
        if (indexInList + 1 < nums[listIndex].length) {
            const nextValue = nums[listIndex][indexInList + 1];
            heap.enqueue([nextValue, listIndex, indexInList + 1]);
            currentMax = Math.max(currentMax, nextValue);
        }
    }

    return [rangeStart, rangeEnd];
};
