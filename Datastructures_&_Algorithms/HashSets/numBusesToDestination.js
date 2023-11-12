/**
 * **815. Bus Routes**
 *
 * You are given an array `routes` representing bus routes where
 * `routes[i]` is a bus route that the `ith` bus repeats forever.
 *
 * For example, if `routes[0] = [1, 5, 7]`, this means that the `0th`
 * bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...
 * ` forever.
 *
 * You will start at the bus stop `source` (You are not on any bus
 * initially), and you want to go to the bus stop `target`. You can
 * travel between bus stops by buses only.
 *
 * Return *the least number of buses you must take to travel from
 * `source` to `target`. Return `-1` if it is not possible.
 *
 * **Constraints:**
 *
 * - `1 <= routes.length <= 500`.
 * - `1 <= routes[i].length <= 105`
 * - All the values of `routes[i]` are unique.
 * - `sum(routes[i].length) <= 105`
 * - `0 <= routes[i][j] < 106`
 * - `0 <= source, target < 106`
 *
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const numBusesToDestination = function (routes, source, target) {
    if (source === target) return 0;

    // Map each stop to the list of buses (routes) that visit it
    const stopToBuses = new Map();
    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToBuses.has(stop)) {
                stopToBuses.set(stop, []);
            }
            stopToBuses.get(stop).push(i);
        }
    }

    // BFS
    const visitedBuses = new Set(); // Buses we have already taken
    const visitedStops = new Set(); // Stops we have already visited
    const queue = [[source, 0]]; // [currentStop, busesTaken]
    visitedStops.add(source);

    while (queue.length > 0) {
        const [currentStop, busesTaken] = queue.shift();
        const buses = stopToBuses.get(currentStop) || [];

        for (const bus of buses) {
            if (visitedBuses.has(bus)) continue;
            visitedBuses.add(bus);

            for (const stop of routes[bus]) {
                if (visitedStops.has(stop)) continue;
                if (stop === target) return busesTaken + 1; // Found the target
                visitedStops.add(stop);
                queue.push([stop, busesTaken + 1]);
            }
        }
    }

    return -1; // If we're here, it's not possible to reach the target
};
