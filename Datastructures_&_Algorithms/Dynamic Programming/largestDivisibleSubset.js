/**
 * **368. Largest Divisible Subset**
 *
 *
 * Given a set of **distinct** positive integers `nums`, return the largest
 * subset `answer` such that every pair `(answer[i], answer[j])` of elements
 * in this subset satisfies:
 *
 * - `answer[i] % answer[j] == 0`, or
 * - `answer[j] % answer[i] == 0`
 *
 * If there are multiple solutions, return any of them.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 1000`
 * - `1 <= nums[i] <= 2 * 109`
 * - All the integers in `nums` are **unique**.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
    }

    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    const result = [];
    let currIndex = maxIndex;
    while (currIndex !== -1) {
        result.push(nums[currIndex]);
        currIndex = prev[currIndex];
    }

    return result.reverse();
};

const nums = [1, 2, 3];
// Output: [1,2]
// Explanation: [1,3] is also accepted.
console.log(largestDivisibleSubset(nums));

const nums1 = [1, 2, 4, 8];
// Output: [1,2,4,8]
console.log(largestDivisibleSubset(nums1));
