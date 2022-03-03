/**
 * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i]` = `[ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
 *
 * Return *the ordering of courses you should take to finish all courses*. If there are many valid answers
 * return *any* of them. If it is impossible to finish all courses, return *an empty array*.
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// Topolgical sort must work on a directed Graph and Acyclic graph
const findOrder = (numCourses, prerequisites) => {
    const graph = buildGraph(numCourses, prerequisites);
    
    const visited = new Set();
    const topSort = [];
    const depart = new Array(numCourses).fill(0);

    for (let node in graph) {
        if (!visited(String(node))) {
            if (hasPath(graph, node, visited, depart, topSort)) return [];
        }
    }

    return topSort;
};

const buildGraph = (n, edges) => {
    const graph = {};

    for (let i = 0; i < n; i += 1) {
        graph[i] = [];
    }

    for (let edge of edges) {
        const [a, b] = edge;

        graph[a].push(b);
    }

    return graph;
};

const numCourses = 4,
    prerequisites = [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ];
// console.log(findOrder(numCourses, prerequisites));

const numCourses2 = 2,
    prerequisites2 = [[0, 1]]; // Output: [0,1]
// console.log(findOrder(numCourses, prerequisites));
console.log(findOrder(numCourses2, prerequisites2));

/* const visited = new Set();
const depart = new Array(numCourses).fill(0);
const topSort = [];
const graph = buildGraph(numCourses, prerequisites);

for (let node in graph) {
    if (!visited.has(String(node))) {
      if (hasPath(graph, node, visited, depart, topSort)) return [];
    }
}

return topSort;
// };

const hasPath = (graph, node, visited, depart, topSort) => {
visited.add(String(node));

for (let neighbor of graph[node]) {
    if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor));
        if(hasPath(graph, neighbor, visited, depart, topSort)) return true;
    }
    if(depart[neighbor] === 0) return true;
}

depart[node]++;
topSort.push(node);
return false;
};

const buildGraph = (n, edges) => {
const graph = {};

for (let i = 0; i < n; i++) {
    graph[i] = [];
}

for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
}
return graph;
}; */
