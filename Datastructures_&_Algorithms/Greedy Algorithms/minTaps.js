/**
 * **1326. Minimum Number of Taps to Open to Water a Garden**
 *
 * There is a one-dimensional garden on the x-axis. The garden starts
 * at the point `0` and ends at the point `n`. (i.e The length of the
 * garden is `n`).
 *
 * There are `n + 1` taps located at points `[0, 1, ..., n]` in the
 * garden.
 *
 * Given an integer `n` and an integer array `ranges` of length `n +
 * 1` where `ranges[i]` (0-indexed) means the `i-th` tap can water the
 * area `[i - ranges[i], i + ranges[i]]` if it was open.
 *
 * Return *the minimum number of taps* that should be open to water
 * the whole garden, If the garden cannot be watered return -1.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 104`
 * - `ranges.length == n + 1`
 * - `0 <= ranges[i] <= 100`
 *
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = function (n, ranges) {
    let intervals = [];

    // Convert ranges into intervals
    for (let i = 0; i <= n; i++) {
        intervals.push([i - ranges[i], i + ranges[i]]);
    }

    // Sort intervals based on their start
    intervals.sort((a, b) => a[0] - b[0]);

    let taps = 0,
        i = 0,
        start = 0,
        end = 0;

    while (end < n) {
        while (i <= n && intervals[i][0] <= start) {
            end = Math.max(end, intervals[i][1]);
            i++;
        }

        if (start === end) return -1; // If no progress was made, garden cannot be fully watered

        taps++;
        start = end;
    }

    return taps;
};

const n = 5,
    ranges = [3, 4, 1, 1, 0, 0];
// Output: 1
/* Explanation: The tap at point 0 can cover the interval [-3,3]
The tap at point 1 can cover the interval [-3,5]
The tap at point 2 can cover the interval [1,3]
The tap at point 3 can cover the interval [2,4]
The tap at point 4 can cover the interval [4,4]
The tap at point 5 can cover the interval [5,5]
Opening Only the second tap will water the whole garden [0,5] */

console.log(minTaps(n, ranges));
