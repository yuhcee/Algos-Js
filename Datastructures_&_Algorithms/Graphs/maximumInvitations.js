/**
 * **2127. Maximum Employees to Be Invited to a Meeting**
 *
 * A company is organizing a meeting and has a list of `n` employees,
 * waiting to be invited. They have arranged for a large **circular**
 * table, capable of seating **any number** of employees.
 *
 * The employees are numbered from `0` to `n - 1`. Each employee has a
 * **favorite** person and they will attend the meeting **only** if they
 * can sit next to their favorite person at the table. The favorite person
 * of an employee is **not** themself.
 *
 * Given a **0-indexed** integer array `favorite`, where `favorite[i]`
 * denotes the favorite person of the `ith` employee, return the **maximum
 * number of employees** that can be invited to the meeting.
 *
 * **Constraints:**
 *
 * - `n == favorite.length`
 * - `2 <= n <= 105`
 * - `0 <= favorite[i] <= n - 1`
 * - `favorite[i] != i`
 *
 * @param {number[]} favorite
 * @return {number}
 */
const maximumInvitations = function (favorite) {
    const n = favorite.length;
    const indegree = Array(n).fill(0);
    const visited = Array(n).fill(false);
    const dp = Array(n).fill(1); // Length of the longest path leading to each node

    // Calculate indegree for each node
    for (const f of favorite) {
        indegree[f]++;
    }

    // Queue for topological sort
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // Topological sort to handle acyclic parts
    while (queue.length) {
        const curr = queue.shift();
        visited[curr] = true;
        const next = favorite[curr];
        dp[next] = Math.max(dp[next], dp[curr] + 1);
        if (--indegree[next] === 0) queue.push(next);
    }

    let cycleMax = 0; // For the largest cycle
    let pairSum = 0; // Sum of tree lengths attached to pairs

    // Find cycles and mutual favorite pairs
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let cycleSize = 0;
            let curr = i;

            // Count the size of the cycle
            while (!visited[curr]) {
                visited[curr] = true;
                curr = favorite[curr];
                cycleSize++;
            }

            if (cycleSize === 2) {
                // Handle mutual favorite pairs
                const [a, b] = [i, favorite[i]];
                pairSum += dp[a] + dp[b];
            } else {
                cycleMax = Math.max(cycleMax, cycleSize);
            }
        }
    }

    return Math.max(cycleMax, pairSum);
};

const favorite = [2, 2, 1, 2];
// Output: 3
/* Explanation:
The above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.
All employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.
Note that the company can also invite employees 1, 2, and 3, and give them their desired seats.
The maximum number of employees that can be invited to the meeting is 3. */
console.log(maximumInvitations(favorite));

const favorite1 = [1, 2, 0];
// Output: 3
/* Explanation: 
Each employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.
The seating arrangement will be the same as that in the figure given in example 1:
- Employee 0 will sit between employees 2 and 1.
- Employee 1 will sit between employees 0 and 2.
- Employee 2 will sit between employees 1 and 0.
The maximum number of employees that can be invited to the meeting is 3. */
console.log(maximumInvitations(favorite1));

const favorite2 = [3, 0, 1, 4, 1];
// Output: 4
/* Explanation:
The above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.
Employee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.
So the company leaves them out of the meeting.
The maximum number of employees that can be invited to the meeting is 4. */
console.log(maximumInvitations(favorite2));