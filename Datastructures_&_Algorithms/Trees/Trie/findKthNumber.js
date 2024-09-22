/**
 * **440. K-th Smallest in Lexicographical Order**
 *
 * Given two integers `n` and `k`, return *the `kth` lexicographically
 * smallest integer in the range `[1, n]`*.
 *
 * **Constraints:**
 *
 * - `1 <= k <= n <= 109`
 *
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function (n, k) {
    // Helper function to count how many numbers are between prefix and nextPrefix
    const countSteps = (prefix, n) => {
        let steps = 0;
        let first = prefix;
        let last = prefix;

        while (first <= n) {
            steps += Math.min(n + 1, last + 1) - first;
            first *= 10;
            last = last * 10 + 9;
        }

        return steps;
    };

    let current = 1;
    k--; // We are looking for the k-th number, and array indexing starts from 0.

    while (k > 0) {
        const steps = countSteps(current, n);

        if (steps <= k) {
            // Move to the next sibling
            current++;
            k -= steps;
        } else {
            // Go deeper into the current subtree
            current *= 10;
            k--;
        }
    }

    return current;
};

const n = 13,
    k = 2;
// Output: 10
// Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
console.log(findKthNumber(n, k));
