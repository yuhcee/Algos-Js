/**
 * **40. Combination Sum II**
 *
 * Given a collection of candidate numbers (`candidates`) and a target
 * number (`target`), find all unique combinations in `candidates` where the
 * candidate numbers sum to `target`.
 *
 * Each number in `candidates` may only be used **once** in the combination.
 *
 * **Note**: The solution set must not contain duplicate combinations.
 *
 * **Constraints:**
 *
 * - `1 <= candidates.length <= 100`
 * - `1 <= candidates[i] <= 50`
 * - `1 <= target <= 30`
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b); // Sort the candidates

    const backtrack = (start, target, path) => {
        if (target === 0) {
            results.push([...path]); // Found a valid combination
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue; // Skip duplicates
            if (candidates[i] > target) break; // Stop further exploration

            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path); // Move forward
            path.pop(); // Backtrack to explore another possibility
        }
    };

    backtrack(0, target, []);
    return results;
};
