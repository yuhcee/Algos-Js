/**
 * **881. Boats to Save People**
 *
 * You are given an array `people` where `people[i]` is the weight of the `ith` person, and an
 * **infinite number of boats** where each boat can carry a maximum weight of `limit`. Each boat
 * carries at most two people at the same time, provided the sum of the weight of those people is at
 * most `limit`.
 *
 * Return *the minimum number of boats to carry every given person*.
 *
 * **Constraints:**
 *
 * - `1 <= people.length <= 5 * 104`
 * - `1 <= people[i] <= limit <= 3 * 104`
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let result = 0,
        light = 0,
        heavy = people.length - 1;

    while (light <= heavy) {
        let left = limit - people[heavy];
        if (left >= people[light]) {
            light += 1;
        }
        heavy -= 1;
        result += 1;
    }
    return result;
};

const people = [1, 2],
    limit = 3;
// Output: 1
// Explanation: 1 boat (1, 2)
console.log(numRescueBoats(people, limit));

const people1 = [3, 2, 2, 1],
    limit1 = 3;
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
console.log(numRescueBoats(people1, limit1));

const people2 = [3, 5, 3, 4],
    limit2 = 5;
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)
console.log(numRescueBoats(people2, limit2));
