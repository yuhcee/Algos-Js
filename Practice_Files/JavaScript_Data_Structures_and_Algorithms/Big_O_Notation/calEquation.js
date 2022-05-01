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
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
    const map = {};

    for (let i = 0; i < equations.length; i++) {
        let e = equations[i];
        let v = values[i];

        if (!(e[0] in map)) {
            map[e[0]] = {};
        }

        if (!(e[1] in map)) {
            map[e[1]] = {};
        }

        map[e[0]][e[1]] = v;
        map[e[1]][e[0]] = 1 / v;
    }
    return queries.map(([a, b]) => dfs(a, b, map, {}, 1));
};

const dfs = (curr, target, map, checked, value) => {
    checked[curr] = true;

    if (!(curr in map)) return -1;

    if (target in map[curr]) {
        return value * map[curr][target];
    }

    let max = -1;

    for (let key of Object.keys(map[curr])) {
        if (!(key in checked)) {
            max = Math.max(dfs(key, target, map, checked, value * map[curr][key]), max);
        }
    }

    return max;
};

const equations = [
        ['a', 'b'],
        ['b', 'c'],
    ],
    values = [2.0, 3.0],
    queries = [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
    ]; // Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
const equations1 = [
        ['a', 'b'],
        ['b', 'c'],
        ['bc', 'cd'],
    ],
    values1 = [1.5, 2.5, 5.0],
    queries1 = [
        ['a', 'c'],
        ['c', 'b'],
        ['bc', 'cd'],
        ['cd', 'bc'],
    ]; // Output: [3.75000,0.40000,5.00000,0.20000]
const equations2 = [['a', 'b']],
    values2 = [0.5],
    queries2 = [
        ['a', 'b'],
        ['b', 'a'],
        ['a', 'c'],
        ['x', 'y'],
    ]; //  Output: [0.50000,2.00000,-1.00000,-1.00000]
console.log(calcEquation(equations, values, queries));
console.log(calcEquation(equations1, values1, queries1));
console.log(calcEquation(equations2, values2, queries2));
