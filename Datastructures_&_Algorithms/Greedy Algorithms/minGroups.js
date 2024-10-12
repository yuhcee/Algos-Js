/**
 * **2406. Divide Intervals Into Minimum Number of Groups**
 *
 * You are given a 2D integer array `intervals` where `intervals[i] = [lefti,
 * righti]` represents the **inclusive** interval `[lefti, righti]`.
 *
 * You have to divide the intervals into one or more **groups** such that each
 * interval is in **exactly** one group, and no two intervals that are in the
 * same group **intersect** each other.
 *
 * Return *the **minimum** number of groups you need to make*.
 *
 * Two intervals **intersect** if there is at least one common number between
 * them. For example, the intervals `[1, 5]` and `[5, 8]` intersect.
 *
 * **Constraints:**
 *
 * - `1 <= intervals.length <= 105`
 * - `intervals[i].length == 2`
 * - `1 <= lefti <= righti <= 106`
 *
 * @param {number[][]} intervals
 * @return {number}
 */
const minGroups = function (intervals) {
    const events = [];

    // Split each interval into two events: start and end + 1
    for (const [start, end] of intervals) {
        events.push([start, 1]); // 1 represents an interval starting
        events.push([end + 1, -1]); // -1 represents an interval ending
    }

    // Sort events by time. If two events have the same time, process starting events first
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let maxGroups = 0;
    let activeIntervals = 0;

    // Process events to count active intervals at each time
    for (const [time, type] of events) {
        activeIntervals += type; // type is 1 for start and -1 for end
        maxGroups = Math.max(maxGroups, activeIntervals); // Track maximum active intervals
    }

    return maxGroups;
};

const intervals = [
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
];
// Output: 3
/* Explanation: We can divide the intervals into the following groups:
- Group 1: [1, 5], [6, 8].
- Group 2: [2, 3], [5, 10].
- Group 3: [1, 10].
It can be proven that it is not possible to divide the intervals into fewer than 3 groups. */
console.log(minGroups(intervals));

const intervals1 = [
    [1, 3],
    [5, 6],
    [8, 10],
    [11, 13],
];
// Output: 1
// Explanation: None of the intervals overlap, so we can put all of them in one group.
console.log(minGroups(intervals1));
