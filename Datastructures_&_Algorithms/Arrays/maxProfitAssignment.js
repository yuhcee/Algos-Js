/**
 * **826. Most Profit Assigning Work**
 *
 * You have `n` jobs and `m` workers. You are given three arrays: `difficulty`,
 * `profit`, and `worker` where:
 *
 * - `difficulty[i]` and `profit[i]` are the difficulty and the profit of the
 * `ith` job, and
 * - `worker[j]` is the ability of `jth` worker (i.e., the `jth` worker can only
 * complete a job with difficulty at most `worker[j]`).
 *
 * Every worker can be assigned **at most one job**, but one job can be
 * **completed multiple times**.
 *
 * - For example, if three workers attempt the same job that pays `$1`, then the
 * total profit will be `$3`. If a worker cannot complete any job, their profit
 * is `$0`.
 *
 * Return the maximum profit we can achieve after assigning the workers to the
 * jobs.
 *
 * **Constraints:**
 *
 * - `n == difficulty.length`
 * - `n == profit.length`
 * - `m == worker.length`
 * - `1 <= n, m <= 104`
 * - `1 <= difficulty[i], profit[i], worker[i] <= 105`
 *
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = function (difficulty, profit, worker) {
    const jobs = difficulty.map((d, i) => [d, profit[i]]);
    jobs.sort((a, b) => a[0] - b[0]); // Sort jobs by difficulty

    // Precompute the maximum profit up to each difficulty level
    let maxProfitAtDifficulty = [];
    let maxProfitSoFar = 0;
    for (let i = 0; i < jobs.length; i++) {
        maxProfitSoFar = Math.max(maxProfitSoFar, jobs[i][1]);
        maxProfitAtDifficulty.push([jobs[i][0], maxProfitSoFar]);
    }

    // Sort workers by their ability
    worker.sort((a, b) => a - b);

    let totalProfit = 0;
    let jobIndex = 0;

    // For each worker, find the best job they can do
    for (let i = 0; i < worker.length; i++) {
        // Move the job index to the maximum difficulty this worker can handle
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= worker[i]) {
            jobIndex++;
        }
        if (jobIndex > 0) {
            // Add the profit of the best job this worker can handle
            totalProfit += maxProfitAtDifficulty[jobIndex - 1][1];
        }
    }

    return totalProfit;
};

const difficulty = [2, 4, 6, 8, 10],
    profit = [10, 20, 30, 40, 50],
    worker = [4, 5, 6, 7];
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
console.log(maxProfitAssignment(difficulty, profit, worker));

const difficulty1 = [85, 47, 57],
    profit1 = [24, 66, 99],
    worker1 = [40, 25, 25];
// Output: 0
console.log(maxProfitAssignment(difficulty1, profit1, worker1));
