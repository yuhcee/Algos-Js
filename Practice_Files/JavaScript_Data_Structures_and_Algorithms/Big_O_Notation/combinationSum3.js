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

    // sum is the remaining sum to be matched
    // count is the remaining count of numbers we need to include
    // start is the least number higher than the last added number
    function recursive(sum, count, start, arr) {
        // complete sum has been matched and all count has been exhausted
        if (sum === 0 && count === 0) {
            result.push([...arr]);
            return;
        }

        // count has been exhausted but sum couldn't be matched
        // OR all remaining numbers are larger than remaining sum
        if (count === 0 || start > sum) return;

        for (let i = start; i <= max; i++) {
            if (i <= sum) recursive(sum - i, count - 1, i + 1, [...arr, i]);
            else break; // no need of checking numbers larger than remainig sum
        }
    }

    recursive(n, k, 1, []);
    // return result
    return result;
};
