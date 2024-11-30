/**
 * **2097. Valid Arrangement of Pairs**
 *
 * You are given a **0-indexed** 2D integer array `pairs` where `pairs[i] =
 * [starti, endi]`. An arrangement of `pairs` is **valid** if for every index
 * `i` where `1 <= i < pairs.length`, we have `endi-1 == starti`.
 *
 * Return ***any** valid arrangement of pairs*.
 *
 * **Note:** The inputs will be generated such that there exists a **valid**
 * arrangement of pairs.
 *
 * **Constraints:**
 *
 * - `1 <= pairs.length <= 105`
 * - `pairs[i].length == 2`
 * - `0 <= starti, endi <= 109`
 * - `starti != endi`
 * - No two pairs are exactly the same.
 * - There **exists** a valid arrangement of `pairs`.
 *
 * @param {number[][]} pairs
 * @return {number[][]}
 */
const validArrangement = function (pairs) {
    const graph = new Map();
    const inDegree = new Map();
    const outDegree = new Map();

    // Build the graph and track in/out degrees
    for (const [u, v] of pairs) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push(v);

        outDegree.set(u, (outDegree.get(u) || 0) + 1);
        inDegree.set(v, (inDegree.get(v) || 0) + 1);
    }

    // Find the starting node for Eulerian path
    let start = pairs[0][0];
    for (const [node, out] of outDegree.entries()) {
        const inDeg = inDegree.get(node) || 0;
        if (out > inDeg) {
            start = node;
            break;
        }
    }

    // Hierholzer's algorithm to find the Eulerian path
    const stack = [start];
    const path = [];

    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (graph.has(node) && graph.get(node).length > 0) {
            const next = graph.get(node).pop();
            stack.push(next);
        } else {
            path.push(stack.pop());
        }
    }

    // Convert path to pairs and reverse
    path.reverse();
    const result = [];
    for (let i = 0; i < path.length - 1; i++) {
        result.push([path[i], path[i + 1]]);
    }

    return result;
};

const pairs = [
    [5, 1],
    [4, 5],
    [11, 9],
    [9, 4],
];
// Output: [[11,9],[9,4],[4,5],[5,1]]
/* Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 9 == 9 = start1 
end1 = 4 == 4 = start2
end2 = 5 == 5 = start3 */
console.log(validArrangement(pairs));

const pairs1 = [
    [1, 3],
    [3, 2],
    [2, 1],
];
// Output: [[1,3],[3,2],[2,1]]
/* Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 3 == 3 = start1
end1 = 2 == 2 = start2
The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid. */
console.log(validArrangement(pairs1));

