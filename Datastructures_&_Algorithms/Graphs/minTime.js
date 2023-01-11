/**
 * **1443. Minimum Time to Collect All Apples in a Tree**
 *
 * Given an undirected tree consisting of `n` vertices numbered from `0` to `n-1`, which has some apples in
 * their vertices. You spend 1 second to walk over one edge of the tree. *Return the minimum time in
 * seconds you have to spend to collect all apples in the tree, starting at **vertex 0** and coming back to
 * this vertex*.
 *
 * The edges of the undirected tree are given in the array `edges`, where `edges[i] = [ai, bi]` means that
 * exists an edge connecting the vertices `ai` and `bi`. Additionally, there is a boolean array `hasApple`,
 * where `hasApple[i] = true` means that vertex `i` has an apple; otherwise, it does not have any apple.
 *
 * **Constraints**:
 *
 * - `1 <= n <= 105`
 * - `edges.length == n - 1`
 * - `edges[i].length == 2`
 * - `0 <= ai < bi <= n - 1`
 * - `fromi < toi`
 * - `hasApple.length == n`
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function (n, edges, hasApple) {
    let parentMap = {};

    for (let [parent, child] of edges) parentMap[child] = parent;

    let seen = {};
    let res = 0;

    for (let i = 0; i < hasApple.length; i++) {
        if (hasApple[i]) {
            let curNode = i;

            while (curNode !== 0 && !seen[curNode]) {
                seen[curNode] = true;
                curNode = parentMap[curNode];
                res += 2;
            }
        }
    }
    return res;
};

const n = 7,
    edges = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
    ],
    hasApple = [false, false, true, false, true, true, false];
// Output: 8
/* Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.   */
console.log(minTime(n, edges, hasApple));

const n1 = 7,
    edges1 = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
    ],
    hasApple1 = [false, false, true, false, false, true, false];
// Output: 6
/* Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows. */
console.log(minTime(n1, edges1, hasApple1));

const n2 = 7,
    edges2 = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
    ],
    hasApple2 = [false, false, false, false, false, false, false];
// Output: 0
console.log(minTime(n2, edges2, hasApple2));
