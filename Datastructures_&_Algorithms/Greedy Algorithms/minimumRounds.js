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

const tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
// Output: 4
/* Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4. */
console.log(minimumRounds(tasks));

const tasks1 = [2, 3, 3];
// Output: -1
/* Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1. */
console.log(minimumRounds(tasks1));
