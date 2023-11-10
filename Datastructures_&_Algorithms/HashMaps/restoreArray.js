/**
 * **1743. Restore the Array From Adjacent Pairs**
 *
 * There is an integer array `nums` that consists of `n` **unique**
 * elements, but you have forgotten it. However, you do remember every
 * pair of adjacent elements in `nums`.
 *
 * You are given a 2D integer array `adjacentPairs` of size `n - 1`
 * where each `adjacentPairs[i] = [ui, vi]` indicates that the
 * elements `ui` and `vi` are adjacent in nums.
 *
 * It is guaranteed that every adjacent pair of elements `nums[i]` and
 * `nums[i+1]` will exist in `adjacentPairs`, either as `[nums[i], nums
 * [i+1]]` or `[nums[i+1], nums[i]]`. The pairs can appear in any
 * order.
 *
 * Return *the original array `nums`. If there are multiple solutions,
 * return **any of them***.
 *
 * **Constraints:**
 *
 * - `nums.length == n`
 * - `adjacentPairs.length == n - 1`
 * - `adjacentPairs[i].length == 2`
 * - `2 <= n <= 105`
 * - `-105 <= nums[i], ui, vi <= 105`
 * - There exists some `nums` that has `adjacentPairs` as its pairs.
 *
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
const restoreArray = function (adjacentPairs) {
    // Step 1: Create a hash map for the adjacency list
    const adjMap = new Map();

    // Step 2: Populate the hash map
    for (const [u, v] of adjacentPairs) {
        if (!adjMap.has(u)) adjMap.set(u, []);
        if (!adjMap.has(v)) adjMap.set(v, []);
        adjMap.get(u).push(v);
        adjMap.get(v).push(u);
    }

    // Step 3: Find the starting number
    let start = 0;
    for (const [num, adj] of adjMap) {
        if (adj.length === 1) {
            start = num;
            break;
        }
    }

    // Step 4: Reconstruct the array
    const nums = [start];
    let prev = start;
    while (nums.length < adjacentPairs.length + 1) {
        const nextAdj = adjMap.get(prev);
        for (const next of nextAdj) {
            if (nums.length === 1 || next !== nums[nums.length - 2]) {
                nums.push(next);
                prev = next;
                break;
            }
        }
    }

    return nums;
};

const adjacentPairs = [
    [2, 1],
    [3, 4],
    [3, 2],
];
// Output: [1,2,3,4]
/* Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order. */
console.log(restoreArray(adjacentPairs));
