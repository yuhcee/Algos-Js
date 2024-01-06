/**
 * **1235. Maximum Profit in Job Scheduling**
 *
 * We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of
 * `profit[i]`.
 *
 * You're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such that there
 * are no two jobs in the subset with overlapping time range.
 *
 * If you choose a job that ends at time `X` you will be able to start another job that starts at time `X`.
 *
 * **Constraints:**
 *
 * `1 <= startTime.length == endTime.length == profit.length <= 5 * 104`
 * `1 <= startTime[i] < endTime[i] <= 109`
 * `1 <= profit[i] <= 104`
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function (startTime, endTime, profit) {
    const n = startTime.length;
    const intervals = [];

    for (let i = 0; i < n; i++) {
        intervals.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }

    intervals.sort((a, b) => a.start - b.start);

    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const nextIndex = binarySearch(intervals, i);
        dp[i] = Math.max(intervals[i].profit + dp[nextIndex], dp[i + 1]);
    }

    return dp[0];
};

function binarySearch(intervals, startIndex) {
    let low = startIndex + 1;
    let high = intervals.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (intervals[mid].start >= intervals[startIndex].end) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

const startTime = [1, 2, 3, 3],
    endTime = [3, 4, 5, 6],
    profit = [50, 10, 40, 70];
// Output: 120
/* Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70. */
console.log(jobScheduling(startTime, endTime, profit));

const startTime1 = [1, 2, 3, 4, 6],
    endTime1 = [3, 5, 10, 6, 9],
    profit1 = [20, 20, 100, 70, 60];
// Output: 150
/* Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60. */
console.log(jobScheduling(startTime1, endTime1, profit1));
