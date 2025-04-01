/**
 * **2818. Apply Operations to Maximize Score**
 *
 * You are given an array `nums` of `n` positive integers and an integer `k`.
 *
 * Initially, you start with a score of `1`. You have to maximize your score by applying the following operation at most `k` times:
 *
 * - Choose any **non-empty** subarray `nums[l, ..., r]` that you haven't chosen previously.
 * - Choose an element `x` of `nums[l, ..., r]` with the highest **prime score**. If multiple such elements exist, choose
 * the one with the smallest index.
 * - Multiply your score by `x`.
 *
 * Here, `nums[l, ..., r]` denotes the subarray of `nums` starting at index `l` and ending at the index `r`, both ends
 * being inclusive.
 *
 * The **prime score** of an integer `x` is equal to the number of distinct prime factors of `x`. For example, the prime
 * score of `300` is `3` since `300 = 2 * 2 * 3 * 5 * 5`.
 *
 * Return *the **maximum possible score** after applying at most k operations*.
 *
 * Since the answer may be large, return it modulo `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length == n <= 105`
 * - `1 <= nums[i] <= 105`
 * - `1 <= k <= min(n * (n + 1) / 2, 109)`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function (nums, k) {
    const MOD = 1e9 + 7;
    const MAXN = 1e5 + 10;

    // Step 1: Precompute prime scores
    const primeScore = new Array(MAXN + 1).fill(0);
    for (let p = 2; p <= MAXN; p++) {
        if (primeScore[p] === 0) {
            for (let m = p; m <= MAXN; m += p) {
                primeScore[m]++;
            }
        }
    }

    const n = nums.length;
    const score = nums.map((num) => primeScore[num]);

    // Step 2: Compute prev_ge
    const prevGe = new Array(n).fill(-1);
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && score[stack[stack.length - 1]] < score[i]) {
            stack.pop();
        }
        if (stack.length) {
            prevGe[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Step 3: Compute next_gt
    const nextGt = new Array(n).fill(n);
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && score[stack[stack.length - 1]] <= score[i]) {
            stack.pop();
        }
        if (stack.length) {
            nextGt[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Step 4: Compute cnt
    const cnt = new Array(n);
    for (let i = 0; i < n; i++) {
        cnt[i] = (i - prevGe[i]) * (nextGt[i] - i);
    }

    // Step 5: Aggregate total_cnt
    const totalCnt = new Map();
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        totalCnt.set(v, (totalCnt.get(v) || 0) + cnt[i]);
    }

    // Step 6: Sort unique values in descending order
    const vList = Array.from(totalCnt.keys()).sort((a, b) => b - a);

    // Step 7: Compute maximum score
    let result = 1n;
    let remaining = k;
    for (const v of vList) {
        if (remaining <= 0) break;
        const power = Math.min(totalCnt.get(v), remaining);
        result = (result * BigInt(modPow(v, power, MOD))) % BigInt(MOD);
        remaining -= power;
    }

    return Number(result);

    // Fast modular exponentiation
    function modPow(base, exp, mod) {
        let res = 1n;
        base = BigInt(base) % BigInt(mod);
        while (exp > 0) {
            if (exp & 1) res = (res * base) % BigInt(mod);
            base = (base * base) % BigInt(mod);
            exp = Math.floor(exp / 2);
        }
        return Number(res);
    }
};

const nums = [8, 3, 9, 3, 8],
    k = 2;
// Output: 81
/* Explanation: To get a score of 81, we can apply the following operations:
- Choose subarray nums[2, ..., 2]. nums[2] is the only element in this subarray. Hence, we multiply the score by nums[2]. The score becomes 1 * 9 = 9.
- Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 1, but nums[2] has the smaller index. Hence, we multiply the score by nums[2]. The score becomes 9 * 9 = 81.
It can be proven that 81 is the highest score one can obtain. */
console.log(maximumScore(nums, k)); // 81
