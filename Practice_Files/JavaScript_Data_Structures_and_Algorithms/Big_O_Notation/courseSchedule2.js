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
/* const findOrder = (numCourses, prerequisites) => {
    const visited = new Set();
    const topSort = [];
    const graph = buildGraph(numCourses, prerequisites);

    for (let node in graph) {
        if (hasPath(graph, node, visited, topSort) === true) {
            return [];
        } else {
            topSort.push(node);
        }
    }

    return topSort;
};

const hasPath = (graph, node, visited) => {
    if (!visited.has(String(node))) return false;
    visited.add(String(node));

    for (let neighbor of graph[node]) {
        hasPath(graph, neighbor, visited);
    }

    return true;
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

const findOrder = (numCourses, prerequisites) => {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const arrive = new Array(numCourses).fill(0);
    const depart = new Array(numCourses).fill(0);
    const topSort = [];
    
    for (let node = 0; node < adjList.length; node++) {
        if (!visited[node]) {
            if (dfs(node, adjList, visited, arrive, depart, topSort)) return [];
        }
    }
    
    return topSort;
};

const dfs = (node, adjList, visited, arrive, depart, topSort) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            if (dfs(neighbor, adjList, visited, arrive, depart, topSort)) return true;
        } else {
            if (depart[neighbor] === 0) return true;
        }
    }

    depart[node]++;
    topSort.push(node);
    return false;
};

const buildAdjList = (n, edges) => {
    const adjList = Array.from({ length: n }, () => []);

    for (let edge of edges) {
        let [a, b] = edge;
        adjList[a].push(b);
    }
    return adjList;
};

const numCourses = 4,
    prerequesities = [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ];
// console.log(findOrder(numCourses, prerequesities));

const numCourses2 = 2,
    prerequisites2 = [[0, 1]]; // Output: [0,1]
// console.log(findOrder(numCourses, prerequesities));
console.log(findOrder(numCourses2, prerequisites2));
