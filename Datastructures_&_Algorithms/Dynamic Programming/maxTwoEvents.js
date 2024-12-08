/**
 * **2054. Two Best Non-Overlapping Events**
 *
 * You are given a **0-indexed** 2D integer array of `events` where `events[i]
 * = [startTimei, endTimei, valuei]`. The `ith` event starts at `startTimei`
 * and ends at `endTimei`, and if you attend this event, you will receive a
 * value of `valuei`. You can choose **at most two non-overlapping** events to
 * attend such that the sum of their values is **maximized**.
 *
 * Return *this **maximum** sum.*
 *
 * Note that the start time and end time is **inclusive**: that is, you cannot
 * attend two events where one of them starts and the other ends at the same
 * time. More specifically, if you attend an event with end time `t`, the next
 * event must start at or after `t + 1`.
 *
 * **Constraints:**
 *
 * - `2 <= events.length <= 105`
 * - `events[i].length == 3`
 * - `1 <= startTimei <= endTimei <= 109`
 * - `1 <= valuei <= 106`
 *
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = function (events) {
    // Sort events by end time
    events.sort((a, b) => a[1] - b[1]);

    let maxVal = 0; // To store the maximum value encountered so far
    let result = 0; // Final result

    // Array to store the maximum value up to each event
    const maxValues = new Array(events.length).fill(0);

    // Iterate through events
    for (let i = 0; i < events.length; i++) {
        const [start, end, value] = events[i];

        // Binary search for the last event that ends before the current event starts
        let low = 0,
            high = i - 1,
            lastNonOverlap = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][1] < start) {
                lastNonOverlap = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // Calculate max value including the current event
        const currentMax = value + (lastNonOverlap >= 0 ? maxValues[lastNonOverlap] : 0);

        // Update the result
        result = Math.max(result, currentMax);

        // Update max value seen so far
        maxVal = Math.max(maxVal, value);
        maxValues[i] = maxVal;
    }

    return result;
};

const events = [
    [1, 3, 2],
    [4, 5, 2],
    [2, 4, 3],
];
// Output: 4
// Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.
console.log(maxTwoEvents(events));

const events1 = [
    [1, 3, 2],
    [4, 5, 2],
    [1, 5, 5],
];
// Output: 5
// Explanation: Choose event 2 for a sum of 5.
console.log(maxTwoEvents(events1));

const events2 = [
    [1, 5, 3],
    [1, 5, 1],
    [6, 6, 5],
];
// Output: 8
// Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.
console.log(maxTwoEvents(events2));
