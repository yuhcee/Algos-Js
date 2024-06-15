/**
 * **502. IPO**
 *
 * Suppose LeetCode will start its **IPO** soon. In order to sell a good price of its shares to
 * Venture Capital, LeetCode would like to work on some projects to increase its capital before the
 * **IPO**. Since it has limited resources, it can only finish at most `k` distinct projects before
 * the **IPO**. Help LeetCode design the best way to maximize its total capital after finishing at
 * most `k` distinct projects.
 *
 * You are given `n` projects where the `ith` project has a pure profit `profits[i]` and a minimum
 * capital of `capital[i]` is needed to start it.
 *
 * Initially, you have `w` capital. When you finish a project, you will obtain its pure profit and
 * the profit will be added to your total capital.
 *
 * Pick a list of at most `k` distinct projects from given projects to maximize your final capital,
 * and return *the final maximized capital*.
 *
 * The answer is guaranteed to fit in a 32-bit signed integer.
 *
 * This function finds the maximum amount of capital that can be raised by performing at most k
 * projects.
 *
 * The function takes in the following parameters:
 *
 *
 * **Constraints:**
 *
 * - `1 <= k <= 105`
 * - `0 <= w <= 109`
 * - `n == profits.length`
 * - `n == capital.length`
 * - `1 <= n <= 105`
 * - `0 <= profits[i] <= 104`
 * - `0 <= capital[i] <= 109`
 *
 *
 * @param {number} k - The maximum number of projects that can be performed.
 * @param {number} initialCapital - The initial capital available to invest.
 * @param {number[]} profits - An array of profits to be earned from each project.
 * @param {number[]} capital - An array of capital required for each project.
 * @returns {number} - The maximum amount of capital that can be raised.
 *
 */
const findMaximizedCapital = function (k, initialCapital, profits, capital) {
    // Create a queue to store the capital required for each project in ascending order
    const capitalAscQueue = new MinPriorityQueue();
    // Create a queue to store the profits to be earned from each project in descending order
    const profitsDescQueue = new MaxPriorityQueue();
    // Iterate through each project and enqueue the capital required and profit to be earned in the capitalAscQueue
    for (let i = 0; i < capital.length; i++) {
        capitalAscQueue.enqueue([capital[i], profits[i]], capital[i]);
    }
    // Perform at most k projects
    for (let i = 0; i < k; i++) {
        // Dequeue all projects with capital required less than or equal to the available capital
        while (!capitalAscQueue.isEmpty() && capitalAscQueue.front().element[0] <= initialCapital) {
            const project = capitalAscQueue.dequeue().element;
            profitsDescQueue.enqueue(project, project[1]);
        }

        // If there are no projects available to invest in, return the current capital
        if (profitsDescQueue.isEmpty()) {
            return initialCapital;
        }
        // Invest in the project with the highest profit and add the earned profit to the current capital
        initialCapital += profitsDescQueue.dequeue().element[1];
    }
    // Return the final amount of capital
    return initialCapital;
};

const k = 2,
    w = 0,
    profits = [1, 2, 3],
    capital = [0, 1, 1];
// Output: 4
/* Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4. */
console.log(findMaximizedCapital(k, w, profits, capital));


const k1 = 3,
    w1 = 0,
    profits1 = [1, 2, 3],
    capital1 = [0, 1, 2];
// Output: 6
console.log(findMaximizedCapital(k1, w1, profits1, capital1));
