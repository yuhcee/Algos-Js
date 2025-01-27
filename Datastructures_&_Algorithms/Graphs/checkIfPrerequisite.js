/**
 * **1462. Course Schedule IV**
 *
 * There are a total of `numCourses` courses you have to take, labeled from
 * `0` to `numCourses - 1`. You are given an array `prerequisites` where
 * `prerequisites[i] = [ai, bi]` indicates that you **must** take course
 * `ai` first if you want to take course `bi`.
 *
 * - For example, the pair `[0, 1]` indicates that you have to take course
 * `0` before you can take course `1`.
 * Prerequisites can also be **indirect**. If course `a` is a prerequisite
 * of course `b`, and course `b` is a prerequisite of course `c`, then
 * course `a` is a prerequisite of course `c`.
 *
 * You are also given an array `queries` where `queries[j] = [uj, vj]`. For
 * the `jth` query, you should answer whether course `uj` is a prerequisite
 * of course `vj` or not.
 *
 * Return *a boolean array `answer`, where `answer[j]` is the answer to the
 * `jth` query*.
 *
 * **Constraints:**
 *
 * - `2 <= numCourses <= 100`
 * - `0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)`
 * - `prerequisites[i].length == 2`
 * - `0 <= ai, bi <= numCourses - 1`
 * - `ai != bi`
 * - All the pairs `[ai, bi]` are unique.
 * - The prerequisites graph has no cycles.
 * - `1 <= queries.length <= 104`
 * - `0 <= ui, vi <= numCourses - 1`
 * - `ui != vi`
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    // Build adjacency list
    const adj = new Array(numCourses).fill().map(() => []);
    for (const [a, b] of prerequisites) {
        adj[a].push(b);
    }

    // Precompute reachable matrix using BFS for each node
    const reachable = new Array(numCourses).fill().map(() => new Array(numCourses).fill(false));

    for (let u = 0; u < numCourses; u++) {
        const queue = [u];
        const visited = new Array(numCourses).fill(false);
        visited[u] = true;
        reachable[u][u] = true;

        while (queue.length > 0) {
            const current = queue.shift();
            for (const neighbor of adj[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    reachable[u][neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    // Process queries
    return queries.map(([u, v]) => reachable[u][v]);
};

const numCourses = 2,
    prerequisites = [[1, 0]],
    queries = [
        [0, 1],
        [1, 0],
    ];
// Output: [false,true]
/* Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
Course 0 is not a prerequisite of course 1, but the opposite is true. */
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));

const numCourses1 = 2,
    prerequisites1 = [],
    queries1 = [
        [1, 0],
        [0, 1],
    ];
// Output: [false,false]
// Explanation: There are no prerequisites, and each course is independent.
console.log(checkIfPrerequisite(numCourses1, prerequisites1, queries1));

const numCourses2 = 3,
    prerequisites2 = [
        [1, 2],
        [1, 0],
        [2, 0],
    ],
    queries2 = [
        [1, 0],
        [1, 2],
    ];
// Output: [true,true]
console.log(checkIfPrerequisite(numCourses2, prerequisites2, queries2));
