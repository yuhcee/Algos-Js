/**
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
