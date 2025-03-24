/**
 * **3169. Count Days Without Meetings**
 *
 * You are given a positive integer `days` representing the total number of days an employee is available for work
 * (starting from day 1). You are also given a 2D array `meetings` of size n where, `meetings[i] = [start_i, end_i]`
 * represents the starting and ending days of meeting i (inclusive).
 *
 * Return the count of days when the employee is available for work but no meetings are scheduled.
 *
 * **Note**: The meetings may overlap.
 *
 * **Constraints:**
 *
 * - `1 <= days <= 109`
 * - `1 <= meetings.length <= 105`
 * - `meetings[i].length == 2`
 * - `1 <= meetings[i][0] <= meetings[i][1] <= days`
 *
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
const countDays = function (days, meetings) {
    // Sort meetings by start time
    meetings.sort((a, b) => a[0] - b[0]);

    let totalMeetingDays = 0;
    let currentStart = meetings[0][0];
    let currentEnd = meetings[0][1];

    // Merge overlapping intervals
    for (let i = 1; i < meetings.length; i++) {
        let [start, end] = meetings[i];
        // Check if this meeting overlaps or touches the current interval
        if (start <= currentEnd + 1) {
            // Extend the current interval if needed
            currentEnd = Math.max(currentEnd, end);
        } else {
            // Add the length of the current interval
            totalMeetingDays += currentEnd - currentStart + 1;
            // Start a new interval
            currentStart = start;
            currentEnd = end;
        }
    }

    // Add the last interval's days
    totalMeetingDays += currentEnd - currentStart + 1;

    // Days without meetings is total days minus the days covered by meetings
    return days - totalMeetingDays;
};

const days = 10,
    meetings = [
        [5, 7],
        [1, 3],
        [9, 10],
    ];
// Output: 2
// Explanation:There is no meeting scheduled on the 4th and 8th days.
console.log(countDays(days, meetings));

const days1 = 5,
    meetings1 = [
        [2, 4],
        [1, 3],
    ];
// Output: 1
// Explanation:There is no meeting scheduled on the 5th day.
console.log(countDays(days1, meetings1));