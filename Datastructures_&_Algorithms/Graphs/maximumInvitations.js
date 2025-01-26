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
