/**
 * **1335. Minimum Difficulty of a Job Schedule**
 *
 * You want to schedule a list of jobs in `d` days. Jobs are dependent (i.e To work on the `ith`
 * job, you have to finish all the jobs `j` where `0 <= j < i`).
 *
 * You have to finish **at least** one task every day. The difficulty of a job schedule is the sum
 * of difficulties of each day of the `d` days. The difficulty of a day is the maximum difficulty
 * of a job done on that day.
 *
 * You are given an integer array `jobDifficulty` and an integer `d`. The difficulty of the `ith`
 * job is `jobDifficulty[i]`.
 *
 * Return *the minimum difficulty of a job schedule*. If you cannot find a schedule for the jobs
 * return `-1`.
 *
 * **Constraints:**
 *
 * - `1 <= jobDifficulty.length <= 300`
 * - `0 <= jobDifficulty[i] <= 1000`
 * - `1 <= d <= 10`
 *
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = (jobDifficulty, d) => {
    const n = jobDifficulty.length;
    if (n < d) return -1;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = jobDifficulty[i] > dp[i + 1] ? jobDifficulty[i] : dp[i + 1];
    }

    for (let i = 2; i <= d; i++)
        for (let j = 0; j <= n - i; j++) {
            let max = 0;
            dp[j] = Infinity;
            for (let k = j; k <= n - i; k++) {
                if (jobDifficulty[k] > max) max = jobDifficulty[k];
                if (dp[j] > dp[k + 1] + max) dp[j] = dp[k + 1] + max;
            }
        }

    return dp[0];
};

const jobDifficulty = [6, 5, 4, 3, 2, 1],
    d = 2;
// Output: 7
/* Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7  */
console.log(minDifficulty(jobDifficulty, d));

const jobDifficulty1 = [9, 9, 9],
    d1 = 4;
// Output: -1
/* Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs. */
console.log(minDifficulty(jobDifficulty1, d1));
