/**
 * There are a total of numCourses courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.
 *
 * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
 *
 * Return `true` if you can finish all courses. Otherwise, return `false`.
 *
 * @param {number} numCourses - The total number of courses
 * @param {number[][]} prerequisites - The prerequisites for the courses
 * @return {boolean} - Whether it is possible to finish all courses
 */
var canFinish = function (numCourses, prerequisites) {
    // Build the graph
    const graph = buildGraph(numCourses, prerequisites);
    // Set to keep track of visited nodes
    const visited = new Set();
    // Array to track departure time of each node during DFS traversal
    const depart = new Array(numCourses).fill(0);

    // Perform DFS on each node
    for (let node in graph) {
        // If the node has not been visited yet
        if (!visited.has(node)) {
            visited.add(node);
            // Check if there is a path from this node to any other node
            if (hasPath(graph, node, visited, depart)) return false;
        }
    }

    // All nodes have been visited and there is no cycle
    return true;
};

// DFS function to check if there is a path from the current node to any other node
const hasPath = (graph, node, visited, depart) => {
    // Iterate over each neighbor of the current node
    for (let neighbor of graph[node]) {
        // If the neighbor has not been visited yet
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            // Check if there is a path from this neighbor to any other node
            if (hasPath(graph, neighbor, visited, depart)) return true;
        }
        // If the neighbor has already been visited and its departure time is 0
        if (depart[neighbor] === 0) return true;
    }

    // Update the departure time of the current node
    depart[node]++;
    return false;
};

// Function to build the graph
const buildGraph = (n, edges) => {
    const graph = {};

    // Initialize an empty array for each node in the graph
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    // Add edges to the graph
    for (let edge of edges) {
        const [a, b] = edge;
        graph[a].push(b);
    }

    return graph;
};

const numCourses = 20,
    prerequisites = [
        [0, 10],
        [3, 18],
        [5, 5],
        [6, 11],
        [11, 14],
        [13, 1],
        [15, 1],
        [17, 4],
    ]; // false
console.log(canFinish(numCourses, prerequisites));

const numCourses1 = 2,
    prerequisites1 = [
        [1, 0],
        [0, 1],
    ]; // false
console.log(canFinish(numCourses1, prerequisites1));

const numCourses2 = 2,
    prerequisites2 = [[1, 0]]; // true
console.log(canFinish(numCourses2, prerequisites2));
