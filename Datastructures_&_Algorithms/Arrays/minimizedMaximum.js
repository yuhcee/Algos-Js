/**
 * **2064. Minimized Maximum of Products Distributed to Any Store**
 *
 * You are given an integer `n` indicating there are `n` specialty retail stores. There are `m` product
 * types of varying amounts, which are given as a **0-indexed** integer array `quantities`, where `quantities
 * [i]` represents the number of products of the `ith` product type.
 *
 * You need to distribute **all products** to the retail stores following these rules:
 *
 * - A store can only be given **at most one product type** but can be given *any* amount of it.
 *
 * - After distribution, each store will have been given some number of products (possibly `0`). Let `x`
 * represent the maximum number of products given to any store. You want `x` to be as small as possible, i.
 * e., you want to **minimize** the **maximum** number of products that are given to any store.
 *
 * Return *the minimum possible `x`*.
 *
 * **Constraints:**
 *
 * - `m == quantities.length`
 * - `1 <= m <= n <= 105`
 * - `1 <= quantities[i] <= 105`
 *
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
const minimizedMaximum = function (n, quantities) {
    // Define binary search bounds
    let left = 1,
        right = Math.max(...quantities);

    // Helper function to check if a given maximum load x is feasible
    const canDistribute = (x) => {
        let storesNeeded = 0;
        for (let q of quantities) {
            // Calculate number of stores needed for each product type at load x
            storesNeeded += Math.ceil(q / x);
            // Early exit if storesNeeded exceeds available stores
            if (storesNeeded > n) return false;
        }
        return storesNeeded <= n;
    };

    // Perform binary search
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            right = mid; // Try for a smaller max load
        } else {
            left = mid + 1; // Increase the max load
        }
    }

    return left;
};

const n = 6,
    quantities = [11, 6];
// Output: 3
/* Explanation: One optimal way is:
- The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
- The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3. */
console.log(minimizedMaximum(n, quantities));

const n1 = 7,
    quantities1 = [15, 10, 10];
// Output: 5
/* Explanation: One optimal way is:
- The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5
- The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5
- The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5
The maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5. */
console.log(minimizedMaximum(n1, quantities1));

const n2 = 1,
    quantities2 = [100000];
// Output: 100000
/* Explanation: The only optimal way is:
- The 100000 products of type 0 are distributed to the only store.
The maximum number of products given to any store is max(100000) = 100000. */
console.log(minimizedMaximum(n2, quantities2));
