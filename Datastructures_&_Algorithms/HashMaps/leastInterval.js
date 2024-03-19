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

const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
    n = 2;
// Output: 8
/* Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed. */
console.log(leastInterval(tasks, n));

const tasks1 = ['A', 'C', 'A', 'B', 'D', 'B'],
    n1 = 1;
// Output: 6
/* Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task. */
console.log(leastInterval(tasks1, n1));

const tasks2 = ['A', 'A', 'A', 'B', 'B', 'B'],
    n2 = 3;
// Output: 10
/* Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks. */
console.log(leastInterval(tasks2, n2));
