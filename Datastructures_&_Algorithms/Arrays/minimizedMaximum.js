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
