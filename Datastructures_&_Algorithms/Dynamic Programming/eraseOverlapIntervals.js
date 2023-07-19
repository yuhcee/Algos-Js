/**
 * **435. Non-overlapping Intervals**
 *
 * Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.
 *
 * **Constraints:**
 *
 * - `1 <= intervals.length <= 105`
 * - `intervals[i].length == 2`
 * - `-5 * 104 <= starti < endi <= 5 * 104`
 *
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    // Sort the intervals based on their ending points
    intervals.sort((a, b) => a[1] - b[1]);

    let nonOverlappingCount = 0; // Count of non-overlapping intervals
    let prevEnd = Number.MIN_SAFE_INTEGER; // Ending point of the previous interval

    for (const interval of intervals) {
        const [start, end] = interval;

        // If the current interval doesn't overlap with the previous one
        if (start >= prevEnd) {
            nonOverlappingCount++; // Increment the non-overlapping count
            prevEnd = end; // Update the ending point for the next iteration
        }
        // If the current interval overlaps with the previous one
        // Skip this interval, as we want to keep the one with the earliest ending point
    }

    // Calculate the number of intervals to remove
    const intervalsToRemove = intervals.length - nonOverlappingCount;
    return intervalsToRemove;
};

const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
];
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
console.log(eraseOverlapIntervals(intervals));

const intervals1 = [
    [1, 2],
    [1, 2],
    [1, 2],
];
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
console.log(eraseOverlapIntervals(intervals1));

const intervals2 = [
    [1, 2],
    [2, 3],
];
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
console.log(eraseOverlapIntervals(intervals2));
