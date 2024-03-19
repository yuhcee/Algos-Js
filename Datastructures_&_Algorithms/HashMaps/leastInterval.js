/**
 * **621. Task Scheduler**
 *
 * You are given an array of CPU `tasks`, each represented by letters A to Z, and a cooling time,
 * `n`. Each cycle or interval allows the completion of one task. Tasks can be completed in any
 * order, but there's a constraint: **identical** tasks must be separated by at least `n` intervals
 * due to cooling time.
 *
 * ​Return the *minimum number of intervals* required to complete all tasks.
 *
 * **Constraints:**
 *
 * - `1 <= tasks.length <= 104`
 * - `tasks[i]` is an uppercase English letter.
 * - `0 <= n <= 100`
 *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
    // Step 1: Create a frequency map
    const frequencyMap = {};
    for (let task of tasks) {
        frequencyMap[task] = (frequencyMap[task] || 0) + 1;
    }

    // Step 2: Find the task with the maximum frequency
    const maxFreq = Math.max(...Object.values(frequencyMap));

    // Step 3: Calculate the number of intervals required
    let numOfMaxFreqTasks = Object.values(frequencyMap).filter((freq) => freq === maxFreq).length;
    let intervalsWithoutCooling = (maxFreq - 1) * (n + 1) + numOfMaxFreqTasks;

    // Step 4: Compare with the length of tasks array
    return Math.max(intervalsWithoutCooling, tasks.length);
};
