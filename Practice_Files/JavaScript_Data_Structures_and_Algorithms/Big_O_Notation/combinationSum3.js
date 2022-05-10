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
};
