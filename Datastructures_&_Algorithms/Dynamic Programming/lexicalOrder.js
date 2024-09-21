/**
 * **386. Lexicographical Numbers**
 *
 * Given an integer `n`, return all the numbers in the range `[1, n]`
 * sorted in lexicographical order.
 *
 * You must write an algorithm that runs in `O(n)` time and uses `O(1)`
 * extra space.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 5 * 104`
 *
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
    const result = [];

    const dfs = (current) => {
        if (current > n) return;
        result.push(current);

        for (let i = 0; i <= 9; i++) {
            const next = current * 10 + i;
            if (next > n) break;
            dfs(next);
        }
    };

    for (let i = 1; i <= 9; i++) {
        if (i > n) break;
        dfs(i);
    }

    return result;
};

const n = 13;
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(n));
