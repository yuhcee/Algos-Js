/**
 * **739. Daily Temperatures**
 *
 * Given an array of integers `temperatures` represents the daily
 * temperatures, return *an array `answer` such that `answer[i]` is the number
 * of days you have to wait after the `ith` day to get a warmer temperature*.
 * If there is no future day for which this is possible, keep `answer[i] == 0`
 * instead.
 *
 * **Constraints:**
 *
 * - `1 <= temperatures.length <= 105`
 * - `30 <= temperatures[i] <= 100`
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    
    return answer;
};
