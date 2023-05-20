/**
 * **Evaluate Equation**
 *
 * You are given an array of variable pairs `equations` and an array of real numbers values, where
 * `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each
 * `Ai` or `Bi` is a string that represents a single variable.
 *
 * You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `jth` query
 * where you must find the answer for `Cj / Dj = ?`.
 *
 * Return *the answers to all queries*. If a single answer cannot be determined, return `-1.0`.
 *
 * **Note**: The input is always valid. You may assume that evaluating the queries will not result
 * in division by zero and that there is no contradiction.
 *
 *  **Constraints:**
 * 
 * - `1 <= equations.length <= 20`
 * - `equations[i].length == 2`
 * - `1 <= Ai.length, Bi.length <= 5`
 * - `values.length == equations.length`
 * - `0.0 < values[i] <= 20.0`
 * - `1 <= queries.length <= 20`
 * - `queries[i].length == 2`
 * - `1 <= Cj.length, Dj.length <= 5`
 * - `Ai, Bi, Cj, Dj` consist of lower case English letters and digits.
 * 
 * @param {string[][]} equations - Array of variable pairs equations.
 * @param {number[]} values - Array of real numbers representing the equation values.
 * @param {string[][]} queries - Array of queries to evaluate.
 * @return {number[]} - Array of answers for each query.
 */
const calcEquation = (equations, values, queries) => {
    
};

/**
 * Helper function to build the graph from equations and values.
 * @param {string[][]} equations - Array of variable pairs equations.
 * @param {number[]} values - Array of real numbers representing the equation values.
 * @return {object} - The built graph.
 */
function buildGraph(equations, values) {
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [numerator, denominator] = equations[i];
        const value = values[i];

        if (!(numerator in graph)) {
            graph[numerator] = [];
        }
        if (!(denominator in graph)) {
            graph[denominator] = [];
        }

        graph[numerator].push([denominator, value]);
        graph[denominator].push([numerator, 1 / value]);
    }

    return graph;
}

/**
 * Helper function to evaluate a query using DFS.
 * @param {object} graph - The graph representing the equations and values.
 * @param {string} start - The starting variable.
 * @param {string} end - The target variable.
 * @param {Set} visited - Set to track visited variables during DFS.
 * @return {number} - The result of evaluating the query.
 */
function evaluateQuery(graph, start, end, visited) {
    if (start === end) {
        return 1.0;
    }

    visited.add(start);

    for (const [next, value] of graph[start]) {
        if (visited.has(next)) {
            continue;
        }

        visited.add(next);
        const result = evaluateQuery(graph, next, end, visited);

        if (result !== -1.0) {
            return result * value;
        }
    }

    return -1.0;
}

