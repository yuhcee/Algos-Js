/**
 * **2244. Minimum Rounds to Complete All Tasks**
 *
 * You are given a **0-indexed** integer array `tasks`, where `tasks[i]` represents the difficulty level of a task. In
 * each round, you can complete either 2 or 3 tasks of the **same difficulty level**.
 *
 * Return *the **minimum** rounds required to complete all the tasks, or `-1` if it is not possible to complete all the
 * tasks.
 *
 * **Constraints:**
 *
 * - `1 <= tasks.length <= 105`
 * - `1 <= tasks[i] <= 109`
 *
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function (tasks) {
    const hash = {};
    let minRounds = 0;

    for (const task of tasks) {
        hash[task] = hash[task] + 1 || 1;
    }

    for (const count of Object.values(hash)) {
        if (count < 2) return -1;
        minRounds += Math.ceil(count / 3);
    }

    return minRounds;
};
