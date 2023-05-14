/**
 *
 * **1376. Time Needed to Inform All Employees**
 *
 * A company has `n` employees with a unique ID for each employee from `0` to `n - 1`. The
 * head of the company is the one with `headID`.
 *
 * Each employee has one direct `manager` given in the `manager` array where `manager[i]`
 * is the direct manager of the `i-th` employee, `manager[headID] = -1`. Also, it is
 * guaranteed that the subordination relationships have a tree structure.
 *
 * The head of the company wants to inform all the company employees of an urgent piece of
 * news. He will inform his direct subordinates, and they will inform their subordinates,
 * and so on until all employees know about the urgent news.
 *
 * The `i-th` employee needs ``informTime[i]`` minutes to inform all of his direct
 * subordinates (i.e., After `informTime[i]` minutes, all his direct subordinates can start
 * spreading the news).
 *
 * Return the *number of minutes* needed to inform all the employees about the urgent news.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 * - `0 <= headID < n`
 * - `manager.length == n`
 * - `0 <= manager[i] < n`
 * - `manager[headID] == -1`
 * - `informTime.length == n`
 * - `0 <= informTime[i] <= 1000`
 * - `informTime[i] == 0` if employee `i` has no subordinates.
 * - It is **guaranteed** that all the employees can be informed.
 *
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
    // Create a map to store the subordinates for each employee
    const subordinates = new Map();

    // Populate the subordinates map based on the manager array
    for (let i = 0; i < n; i++) {
        const mgr = manager[i];
        if (!subordinates.has(mgr)) {
            subordinates.set(mgr, []);
        }
        subordinates.get(mgr).push(i);
    }

    // Define a recursive helper function to calculate the time needed for each employee
    function dfs(employee) {
        // If the employee has no subordinates, return 0 (base case)
        if (!subordinates.has(employee)) {
            return 0;
        }

        let maxTime = 0;
        // Iterate over the subordinates of the employee and recursively calculate the time for each
        for (let sub of subordinates.get(employee)) {
            maxTime = Math.max(maxTime, dfs(sub));
        }

        // Add the informTime of the current employee to the maximum time of subordinates
        return maxTime + informTime[employee];
    }

    // Start the recursive calculation from the headID
    return dfs(headID);
};
