/**
 * **1014. Best Sightseeing Pair**
 *
 * You are given an integer array `values` where `values[i]` represents the
 * value of the `ith` sightseeing spot. Two sightseeing spots `i` and `j` have
 * a distance `j - i` between them.
 *
 * The score of a pair (`i < j`) of sightseeing spots is `values[i] + values[j]
 * + i - j`: the sum of the values of the sightseeing spots, minus the distance
 * between them.
 *
 *
 * Return *the maximum score of a pair of sightseeing spots.*
 *
 * **Constraints:**
 *
 * - `2 <= values.length <= 5 * 104`
 * - `1 <= values[i] <= 1000`
 *
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair = function (values) {
    let maxScore = 0; // Maximum score found so far
    let maxLeft = values[0]; // Best value for (values[i] + i) seen so far

    for (let j = 1; j < values.length; j++) {
        // Compute the current score
        maxScore = Math.max(maxScore, maxLeft + values[j] - j);

        // Update the maxLeft for the next iteration
        maxLeft = Math.max(maxLeft, values[j] + j);
    }

    return maxScore;
};

const values = [8, 1, 5, 2, 6];
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
console.log(maxScoreSightseeingPair(values));
