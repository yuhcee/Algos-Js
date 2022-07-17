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
const buildGraph = (n, pairs) => {
    const graph = {};

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let [a, b] of pairs) {
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
const smallestStringWithSwaps = (s, pairs) => {
    let n = s.length;
    let graph = buildGraph(n, pairs);
    let adj = new Array(n);

    for (let i = 0; i < n; i++) adj[i] = [];
    adj;
    graph;

    for (let [a, b] of pairs) {
        adj[a].push(b);
        adj[b].push(a);
    }
    adj;
    graph;

    let visited = new Array(n).fill(false);
    let visitedSet = new Set()

    visited;
    visitedSet

    let ans = new Array(n);
    let str, idx;

    let dfs = (node) => {
        visited[node] = true;
        idx.push(node);
        str.push(s[node]);

        for (let next of adj[node]) {
            next
            console.log(adj[node])
            if (!visited[next]) dfs(next);
        }
        idx
        str
    };
    
    for (let i = 0; i < n; i++) {
        visited
        if (!visited[i]) {
            str = [];
            idx = [];
            dfs(i);
            idx.sort((a, b) => a - b);
            str.sort();

            for (let j = 0; j < str.length; j++) {
                ans[idx[j]] = str[j];
            }
        }
    }
    return ans.join('');
};

const s = 'dcab',
    pairs = [
        [0, 3],
        [1, 2],
    ]; // Output: "bacd"

console.log(smallestStringWithSwaps(s, pairs));
