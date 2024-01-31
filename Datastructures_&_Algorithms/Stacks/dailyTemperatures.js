/**
 * **739. Daily Temperatures**
 *
 * Given an array of integers `temperatures` represents the daily
 * temperatures, return *an array `answer` such that `answer[i]` is the number
 * of days you have to wait after the `ith` day to get a warmer temperature*.
 *
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
 *
 */
const dailyTemperatures = function (temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    return answer;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures(temperatures));

const temperatures1 = [30, 40, 50, 60];
// Output: [1,1,1,0]
console.log(dailyTemperatures(temperatures1));

const temperatures2 = [30, 60, 90];
// Output: [1,1,0]
console.log(dailyTemperatures(temperatures2));

const temperatures3 = [60, 50, 40, 30];
// Output: [0,0,0,0]
console.log(dailyTemperatures(temperatures3));

const temperatures4 = [70, 60, 80, 90];
// Output: [2,1,1,0]
console.log(dailyTemperatures(temperatures4));
