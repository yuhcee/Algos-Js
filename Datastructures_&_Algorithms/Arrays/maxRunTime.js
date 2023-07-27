/**
 * **2141. Maximum Running Time of N Computers**
 *
 * You have `n` computers. You are given the integer `n` and a **0-indexed** integer array
 * `batteries` where the ith battery can run a computer for `batteries[i]` minutes. You are
 * interested in running **all** `n` computers **simultaneously** using the given batteries.
 *
 * Initially, you can insert **at most one battery** into each computer. After that and at any
 * integer time moment, you can remove a battery from a computer and insert another battery **any
 * number of times**. The inserted battery can be a totally new battery or a battery from another
 * computer. You may assume that the removing and inserting processes take no time.
 *
 * Note that the batteries cannot be recharged.
 *
 * Return *the **maximum** number of minutes you can run all the `n` computers simultaneously*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= batteries.length <= 105`
 * - `1 <= batteries[i] <= 109`
 *
 * @param {number} n - The number of computers.
 * @param {number[]} batteries - Array of battery times for each computer.
 * @return {number} - The maximum number of minutes all n computers can run simultaneously.
 */
const maxRunTime = function (n, batteries) {
    // Function to check if it is possible to run all computers simultaneously
    const canRunAllComputers = (maxTime) => {
        let totalRunningTime = 0;

        // Calculate the total running time using the given maxTime
        for (let battery of batteries) {
            totalRunningTime += Math.min(battery, maxTime);
        }

        // Check if the total running time is greater than or equal to n times maxTime
        return totalRunningTime >= n * maxTime;
    };

    let left = 0; // Lower bound for binary search
    let right = batteries.reduce((acc, battery) => acc + battery, 0); // Upper bound for binary search

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);

        // Check if it is possible to run all computers simultaneously for the current mid value
        if (canRunAllComputers(mid)) {
            // If possible, update the lower bound to mid
            left = mid;
        } else {
            // If not possible, update the upper bound to mid - 1
            right = mid - 1;
        }
    }

    // The answer will be the lower bound (left)
    return left;
};

const n = 2,
    batteries = [3, 3, 3];
// Output: 4
/* Explanation: 
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4. */
console.log(maxRunTime(n, batteries));

const n1 = 2,
    batteries1 = [1, 1, 1, 1];
// Output: 2
/* Explanation: 
Initially, insert battery 0 into the first computer and battery 2 into the second computer. 
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer. 
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2. */
console.log(maxRunTime(n1, batteries1));
