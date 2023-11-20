/**
 * **2391. Minimum Amount of Time to Collect Garbage**
 *
 * You are given a **0-indexed** array of strings `garbage` where
 * `garbage[i]` represents the assortment of garbage at the ith house.
 * garbage[i] consists only of the characters `'M'`, `'P'` and `'G'`
 * representing one unit of metal, paper and glass garbage
 * respectively. Picking up **one** unit of any type of garbage takes
 * `1` minute.
 *
 * You are also given a **0-indexed** integer array `travel` where
 * `travel[i]` is the number of minutes needed to go from house `i` to
 * house `i + 1`.
 *
 * There are three garbage trucks in the city, each responsible for
 * picking up one type of garbage. Each **garbage** truck starts at
 * house `0` and must visit each house **in order**; however, they do
 * **not** need to visit every house.
 *
 * Only **one** garbage truck may be used at any given moment. While
 * one truck is driving or picking up garbage, the other two trucks
 * **cannot** do anything.
 *
 * Return *the minimum number of minutes needed to pick up all the
 * garbage*.
 *
 * **Constraints:**
 *
 * - `2 <= garbage.length <= 105`
 * - `garbage[i]` consists of only the letters `'M'`, `'P'`, and `'G'`.
 * - `1 <= garbage[i].length <= 10`
 * - `travel.length == garbage.length - 1`
 * - `1 <= travel[i] <= 100`
 *
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
const garbageCollection = function (garbage, travel) {
    let lastM = -1,
        lastP = -1,
        lastG = -1;
    let totalTime = 0;

    // Find the last house for each type of garbage
    for (let i = 0; i < garbage.length; i++) {
        if (garbage[i].includes('M')) lastM = i;
        if (garbage[i].includes('P')) lastP = i;
        if (garbage[i].includes('G')) lastG = i;
        totalTime += garbage[i].length; // Add collection time
    }

    // Calculate travel time for each truck
    for (let i = 0; i < travel.length; i++) {
        if (i < lastM) totalTime += travel[i];
        if (i < lastP) totalTime += travel[i];
        if (i < lastG) totalTime += travel[i];
    }

    return totalTime;
};

const garbage = ['MMM', 'PGM', 'GP'],
    travel = [3, 10];
// Output: 37
/* Explanation:
The metal garbage truck takes 7 minutes to pick up all the metal garbage.
The paper garbage truck takes 15 minutes to pick up all the paper garbage.
The glass garbage truck takes 15 minutes to pick up all the glass garbage.
It takes a total of 7 + 15 + 15 = 37 minutes to collect all the garbage. */
console.log(garbageCollection(garbage, travel));
