/**
 * **1203. Sort Items by Groups Respecting Dependencies**
 *
 * There are `n` items each belonging to zero or one of `m` groups where
 * `group[i]` is the group that the `i`-th item belongs to and it's equal to
 * `-1` if the `i`-th item belongs to no group. The items and the groups are
 * zero indexed. A group can have no item belonging to it.
 *
 * Return a sorted list of the items such that:
 *
 * - The items that belong to the same group are next to each other in the
 * sorted list.
 * - There are some relations between these items where `beforeItems[i]` is a
 * list containing all the items that should come before the `i`-th item in
 * the sorted array (to the left of the `i`-th item).
 *
 * Return any solution if there is more than one solution and return an
 * **empty list** if there is no solution.
 *
 * **Constraints:**
 *
 * - `1 <= m <= n <= 3 * 104`
 * - `group.length == beforeItems.length == n`
 * - `-1 <= group[i] <= m - 1`
 * - `0 <= beforeItems[i].length <= n - 1`
 * - `0 <= beforeItems[i][j] <= n - 1`
 * - `i != beforeItems[i][j]`
 * - `beforeItems[i]` does not contain duplicates elements.
 *
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
const sortItems = function (n, m, group, beforeItems) {
    // Step 1: Assign unique group IDs to items that don't belong to any group
    for (let i = 0; i < n; i++) {
        if (group[i] === -1) {
            group[i] = m++;
        }
    }

    // Step 2: Create adjacency lists for items and groups
    const groupAdjList = new Array(m).fill(0).map(() => []);
    const itemAdjList = new Array(n).fill(0).map(() => []);

    // Populate adjacency lists
    for (let i = 0; i < n; i++) {
        for (const beforeItem of beforeItems[i]) {
            itemAdjList[beforeItem].push(i);
            if (group[beforeItem] !== group[i]) {
                groupAdjList[group[beforeItem]].push(group[i]);
            }
        }
    }

    // Step 3: Perform topological sorting for items within groups
    const itemOrder = topologicalSort(itemAdjList, n);

    // Step 4: Perform topological sorting for groups
    const groupOrder = topologicalSort(groupAdjList, m);

    // If either sorting failed, return an empty array
    if (itemOrder.length !== n || groupOrder.length !== m) {
        return [];
    }

    // Step 5: Merge sorted groups and items
    const result = [];
    for (const groupId of groupOrder) {
        const itemsInGroup = [];
        for (const itemId of itemOrder) {
            if (group[itemId] === groupId) {
                itemsInGroup.push(itemId);
            }
        }
        result.push(...itemsInGroup);
    }

    return result;
};

// Helper function for topological sorting using Kahn's algorithm
function topologicalSort(adjList, n) {
    const inDegree = new Array(n).fill(0);
    for (const neighbors of adjList) {
        for (const neighbor of neighbors) {
            inDegree[neighbor]++;
        }
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        for (const neighbor of adjList[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return result.length === n ? result : [];
}

const n = 8,
    m = 2,
    group = [-1, -1, 1, 0, 0, 1, 0, -1],
    beforeItems = [[], [6], [5], [6], [3, 6], [], [], []];
// Output: [6,3,4,1,5,2,0,7]
console.log(sortItems(n, m, group, beforeItems));

const n1 = 8,
    m1 = 2,
    group1 = [-1, -1, 1, 0, 0, 1, 0, -1],
    beforeItems1 = [[], [6], [5], [6], [3], [], [4], []];
// Output: []
// Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
console.log(sortItems(n1, m1, group1, beforeItems1));
