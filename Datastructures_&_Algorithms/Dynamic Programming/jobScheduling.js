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
var jobScheduling = function (startTime, endTime, profit) {
    let intervals = [];
    for (let i = 0; i < startTime.length; i++) {
        intervals.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }

    intervals.sort((a, b) => a.start - b.start);
    let memo = new Array(intervals.length + 1);
    return dfs(0);

    function dfs(startIdx) {
        if (memo[startIdx] !== undefined) {
            return memo[startIdx];
        }

        if (startIdx >= intervals.length) {
            return 0;
        }

        // taking
        let idx = startIdx;
        let take = intervals[startIdx];
        while (intervals[idx]?.start < take?.end) {
            idx++;
        }

        const takeProfit = take.profit + dfs(idx);
        // not taking
        const notTakeProfit = dfs(startIdx + 1);
        let res = Math.max(takeProfit, notTakeProfit);
        memo[startIdx] = res;
        return res;
    }
};

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
