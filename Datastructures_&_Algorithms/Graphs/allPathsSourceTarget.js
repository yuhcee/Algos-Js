/**
 * **797. All Paths From Source to Target**
 *
 * Given a directed acyclic graph (**DAG**) of `n` nodes labeled from
 * `0` to `n - 1`, find all possible paths from node `0` to node `n -
 * 1` and return them in **any order**.
 *
 * The graph is given as follows: `graph[i]` is a list of all nodes you
 * can visit from node `i` (i.e., there is a directed edge from node
 * `i` to node `graph[i][j]`).
 *
 * **Constraints:**
 *
 * - `n == graph.length`
 * - `2 <= n <= 15`
 * - `0 <= graph[i][j] < n`
 * - `graph[i][j] != i` (i.e., there will be no self-loops).
 * - All the elements of `graph[i]` are unique.
 * - The input graph is **guaranteed** to be a **DAG**.
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    const res = [];

    const dfs = (i, stack) => {
        if (stack.includes(i)) return;

        stack.push(i);

        if (i === graph.length - 1) res.push(stack);
        else graph[i].forEach((node) => dfs(node, [...stack]));
    };

    dfs(0, []);
    return res;
};

const graph = [[1, 2], [3], [3], []];
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
console.log(allPathsSourceTarget(graph));

const graph1 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
console.log(allPathsSourceTarget(graph1));
