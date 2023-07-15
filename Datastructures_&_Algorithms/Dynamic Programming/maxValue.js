/**
 * **1751. Maximum Number of Events That Can Be Attended II**
 *
 * You are given an array of `events` where `events[i] = [startDayi, endDayi, valuei]`. The `ith`
 * event starts at `startDayi` and ends at `endDayi`, and if you attend this event, you will receive a
 * value of `valuei`. You are also given an integer `k` which represents the maximum number of events
 * you can attend.
 *
 * You can only attend one event at a time. If you choose to attend an event, you must attend the
 * **entire** event. Note that the end day is **inclusive**: that is, you cannot attend two events
 * where one of them starts and the other ends on the same day.
 *
 * Return *the **maximum sum** of values that you can receive by attending events*.
 *
 * **Constraints:**
 *
 * - `1 <= k <= events.length`
 * - `1 <= k * events.length <= 106`
 * - `1 <= startDayi <= endDayi <= 109`
 * - `1 <= valuei <= 106`
 *
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function (events, k) {
    events.sort((a, b) => a[1] - b[1]); // Sort events based on end days in ascending order
    const n = events.length;
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            const [start, end, value] = events[j - 1];
            const prevEventIndex = binarySearch(events, start);
            dp[i][j] = Math.max(
                dp[i][j - 1], // Skip the current event
                dp[i - 1][prevEventIndex] + value // Include the current event
            );
        }
    }

    return dp[k][n];
};

// Binary search to find the previous event index
function binarySearch(events, target) {
    let left = 0;
    let right = events.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (events[mid][1] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
