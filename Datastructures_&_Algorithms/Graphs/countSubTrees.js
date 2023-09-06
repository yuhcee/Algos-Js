/**
 * **1519. Number of Nodes in the Sub-Tree With the Same Label**
 * 
 * You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e. The node with the number i has the label labels[i]).

The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.

Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.

A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.
 * 

Constraints:

1 <= n <= 105
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
labels.length == n
labels is consisting of only of lowercase English letters.

 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const countSubTrees = (n, edges, labels) => {
    // Step 1: Represent the graph as an adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const ans = Array(n).fill(0);
    const visited = Array(n).fill(false);

    const dfs = (node) => {
        // Base Case
        if (visited[node]) return Array(26).fill(0);
        
        visited[node] = true;
        const currFreq = Array(26).fill(0);
        
        for (const child of graph[node]) {
            const childFreq = dfs(child);
            for (let i = 0; i < 26; i++) {
                currFreq[i] += childFreq[i];
            }
        }

        // Increment the frequency for the current node's label
        currFreq[labels.charCodeAt(node) - 97]++;
        ans[node] = currFreq[labels.charCodeAt(node) - 97];
        
        return currFreq;
    };

    // Step 3: Initialization
    dfs(0);

    return ans;
}