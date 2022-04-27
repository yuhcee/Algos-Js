/**
 * **1202. Smallest String With Swaps**
 *
 * You are given a string `s`, and an array of pairs of indices in the string `pairs` where `pairs[i] =
 * [a, b]` indicates 2 indices(0-indexed) of the string.
 *
 * You can swap the characters at any pair of indices in the given `pairs` **any number of times**.
 *
 * Return the lexicographically smallest string that `s` can be changed to after using the swaps.
 *
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = (s, pairs) => {
    let n = s.length,
        visited = new Set(),
        graph = buildGraph(n);

    for (let [a, b] of pairs) {
        graph[a].push(b);
        graph[b].push(a);
    }

};

const buildGraph = (n) => {
    const graph = {};

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    return graph;
};

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        hasPath(graph, neighbor, dst, visited);
    }
};
