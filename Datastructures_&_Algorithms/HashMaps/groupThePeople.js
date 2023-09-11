/**
 * **1282. Group the People Given the Group Size They Belong To**
 *
 * There are `n` people that are split into some unknown number of groups. Each
 * person is labeled with a **unique ID** from `0` to `n - 1`.
 *
 * You are given an integer array `groupSizes`, where `groupSizes[i]` is the size
 * of the group that person `i` is in. For example, if `groupSizes[1] = 3`, then
 * person `1` must be in a group of size `3`.
 *
 * Return *a list of groups such that each person `i` is in a group of size
 * `groupSizes[i]`*.
 *
 * Each person should appear in **exactly one group**, and every person must be
 * in a group. If there are multiple answers, **return any of them**. It is
 * **guaranteed** that there will be **at least one** valid solution for the
 * given input.
 *
 * **Constraints:**
 *
 * - `groupSizes.length == n`
 * - `1 <= n <= 500`
 * - `1 <= groupSizes[i] <= n`
 *
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function (groupSizes) {
    const groups = {}; // Create an object to store the groups

    const result = []; // Initialize the result array here

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i]; // Get the group size for the current person

        if (!groups[size]) {
            groups[size] = []; // Initialize an empty array for this group size
        }

        groups[size].push(i); // Add the person to the corresponding group
        // If the group size is reached, add the group to the result and reset it
        if (groups[size].length === size) {
            result.push(groups[size]); // Push the group to the result
            groups[size] = []; // Reset the group
        }
    }

    for (const size in groups) {
        result.push(...groups[size]); // Push all the remaining groups to the result
    }

    return result;
};

const groupSizes = [3, 3, 3, 3, 3, 1, 3];
// Output: [[5],[0,1,2],[3,4,6]]
/* Explanation: 
The first group is [5]. The size is 1, and groupSizes[5] = 1.
The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]]. */
console.log(groupThePeople(groupSizes));
