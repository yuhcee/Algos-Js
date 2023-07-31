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
