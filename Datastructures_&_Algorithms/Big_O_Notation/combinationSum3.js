/**
 * **216. Combination Sum III**
 *
 * Find all valid combinations of `k` numbers that sum up to `n` such that the following
 * conditions are true:
 *
 * - Only numbers `1` through `9` are used.
 * - Each number is used **at most once**.
 *
 * Return *a list of all possible valid combinations*. The list must not contain the same
 * combination twice, and the combinations may be returned in any order.
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
    // ensure digits is not larger than the number
    let max = n >= 9 ? 9 : n;
    // init arr to return result
    let result = [];

    // count is the remaining count of numbers we need to include
    // sum is the remaining sum to be matched
    // start is the least number higher than the last added number
    function recursive(count, sum, start, arr) {
        // complete sum has been matched and all count has been exhausted
        if (sum === 0 && count === 0) {
            result.push([...arr]);
            return;
        }

        // count has been exhausted but sum couldn't be matched
        // OR all remaining numbers are larger than remaining sum
        if (count === 0 || start > sum) return;

        for (let i = start; i <= max; i++) {
            if (i <= sum) recursive(count - 1, sum - i, i + 1, [...arr, i]);
            else break; // no need of checking numbers larger than remainig sum
        }
    }

    recursive(k, n, 1, []);
    // return result
    return result;
};

const k = 3,
    n = 7; // Output: [[1, 2, 4]];
/* Explanation:
1 + 2 + 4 = 7
There are no other valid combinations. */

const k1 = 3,
    n1 = 9;
/* Output: [
    [1, 2, 6],
    [1, 3, 5],
    [2, 3, 4],
]; */
/* Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations. */
const k2 = 4,
    n2 = 1; // Output: []
/* Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination. */

console.log(combinationSum3(k, n));
// console.log(combinationSum3(k1, n1));
// console.log(combinationSum3(k2, n2));
