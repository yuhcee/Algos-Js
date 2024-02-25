/**
 * **2709. Greatest Common Divisor Traversal**
 *
 * You are given a **0-indexed** integer array `nums`, and you are allowed
 * to **traverse** between its indices. You can traverse between index `i`
 * and index `j`, `i != j`, if and only if `gcd(nums[i], nums[j]) > 1`,
 * where `gcd` is the **greatest common divisor**.
 *
 * Your task is to determine if for **every pair** of indices `i` and `j` in
 * nums, where `i < j`, there exists a **sequence of traversals** that can
 * take us from `i` to `j`.
 *
 * Return *`true` if it is possible to traverse between all such pairs of
 * indices, or false otherwise.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canTraverseAllPairs = (nums) => {
    if (nums.length === 1) return true;
    const n = nums.length;
    const maxElement = Math.max(...nums);
    if (Math.min(...nums) === 1) return false;
    const factorArray = factorsCalculator(maxElement);

    const parent = [...Array(maxElement + 1).keys()];
    const rank = Array(maxElement + 1).fill(1);

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        while (x > 1) {
            const p = factorArray[x];
            Union(parent, rank, p, nums[i]);
            while (x % p === 0) {
                x = x / p;
            }
        }
    }

    const p = Find(parent, nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (Find(parent, nums[i]) !== p) return false;
    }

    return true;
};

function factorsCalculator(n) {
    const dp = Array(n + 2)
        .fill()
        .map((_, i) => i);
    for (let i = 2; i <= n; i++) {
        if (dp[i] === i) {
            for (let j = i * 2; j <= n; j += i) {
                if (dp[j] === j) dp[j] = i;
            }
        }
    }
    return dp;
}

function Find(parent, a) {
    return (parent[a] = parent[a] === a ? a : Find(parent, parent[a]));
}

function Union(parent, rank, a, b) {
    a = Find(parent, a);
    b = Find(parent, b);
    if (a === b) return;
    if (rank[a] < rank[b]) {
        [a, b] = [b, a];
    }
    parent[b] = a;
    rank[a] += rank[b];
}

const nums = [2, 3, 6];
// Output: true
/* Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1. */
console.log(canTraverseAllPairs(nums));
