/**
 * There are a total of numCourses courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.
 *
 * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
 *
 * Return `true` if you can finish all courses. Otherwise, return `false`.
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const depart = new Array(numCourses).fill(0);
    const visited = new Set();

    for (let node in graph) {
        if (!visited.has(String(node))) {
            visited.add(String(node));
            if (hasPath(graph, node, visited, depart)) return false;
        }
    }
    return true;
};

const hasPath = (graph, node, visited, depart) => {
    for (let neighbor of graph[node]) {
        if (!visited.has(String(neighbor))) {
            visited.add(String(neighbor));
            if (hasPath(graph, neighbor, visited, depart)) return true;
        }
        if (depart[neighbor] === 0) return true;
    }
    depart[node]++;
    return false;
};

const buildGraph = (n, edges) => {
    const graph = {};

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let edge of edges) {
        const [src, dest] = edge;

        graph[src].push(dest);
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

const numCourses1 = 2,
    prerequisites1 = [
        [1, 0],
        [0, 1],
    ]; // false

const numCourses2 = 2,
    prerequisites2 = [[1, 0]]; // true

console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses1, prerequisites1));
console.log(canFinish(numCourses2, prerequisites2));
