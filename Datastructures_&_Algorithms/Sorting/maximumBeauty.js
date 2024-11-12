/**
 * **2070. Most Beautiful Item for Each Query**
 *
 * You are given a 2D integer array `items` where `items[i] = [pricei, beautyi]` denotes the **price** and
 * **beauty** of an item respectively.
 *
 * You are also given a **0-indexed** integer array `queries`. For each `queries[j]`, you want to determine
 * the **maximum beauty** of an item whose price is less than or equal to `queries[j]`. If no such item
 * exists, then the answer to this query is `0`.
 *
 * Return *an `array` answer of the same length as `queries` where `answer[j]` is the answer to the `jth`
 * query*.
 *
 * **Constraints:**
 *
 * - `1 <= items.length, queries.length <= 105`
 * - `items[i].length == 2`
 * - `1 <= pricei, beautyi, queries[j] <= 109`
 *
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
const maximumBeauty = function (items, queries) {
    // Step 1: Sort items by price, then queries with their original indices
    items.sort((a, b) => a[0] - b[0]);
    const sortedQueries = queries.map((query, index) => [query, index]).sort((a, b) => a[0] - b[0]);

    // Step 2: Process items to get maximum beauty at each price
    let maxBeautySoFar = 0;
    const beautyAtPrice = [];
    for (let [price, beauty] of items) {
        maxBeautySoFar = Math.max(maxBeautySoFar, beauty);
        beautyAtPrice.push([price, maxBeautySoFar]);
    }

    // Step 3: Answer each query using binary search
    const result = new Array(queries.length).fill(0);
    let j = 0;

    for (let [query, originalIndex] of sortedQueries) {
        // Find the rightmost item with price <= query using the sliding pointer approach
        while (j < beautyAtPrice.length && beautyAtPrice[j][0] <= query) {
            j++;
        }

        // If we have at least one valid item
        result[originalIndex] = j > 0 ? beautyAtPrice[j - 1][1] : 0;
    }

    return result;
};
