/**
 * **77. Combinations**
 *
 * Given two integers `n` and `k`, return *all possible combinations of `k` numbers chosen from the
 * range `[1, n]`.
 *
 * You may return the answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 20`
 * - `1 <= k <= n`
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const result = []; // Array to store the final combinations

    // Helper function to perform backtracking and generate combinations
    const backtrack = (current, start) => {
        // If the current combination has k elements, add it to the result array
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        // Loop through the remaining numbers from 'start' to 'n'
        for (let i = start; i <= n; i++) {
            current.push(i); // Include the current number in the combination
            backtrack(current, i + 1); // Recursively generate combinations with the next numbers
            current.pop(); // Backtrack: Remove the last number to explore other possibilities
        }
    };

    backtrack([], 1); // Start the backtracking process with an empty current array and 'start' at 1
    return result;
};
const n = 4,
    k = 2;
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
/* Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination. */
console.log(combine(n, k));

const n1 = 1,
    k1 = 1;
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.
console.log(combine(n1, k1));
