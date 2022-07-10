/**
 * **1696. Jump Game VI**
 *
 * You are given a **0-indexed** integer array nums and an integer k.
 *
 * You are initially standing at index `0`. In one move, you can jump at most `k` steps forward
 * without going outside the boundaries of the array. That is, you can jump from index `i` to any
 * index in the range `[i + 1, min(n - 1, i + k)]` **inclusive**.
 *
 * You want to reach the last index of the array (index `n - 1`). Your **score** is the **sum** of
 * all `nums[j]` for each index `j` you visited in the array.
 *
 * Return *the maximum score you can get*.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxResult = (nums, k) => {
    const len = nums.length,
        dp = Array(len).fill(0);
    dp[0] = nums[0];

    const monoDequeue = [];
    monoDequeue.push(0);

    for (let i = 1; i < len; i++) {
        let score = nums[i];

        if (monoDequeue.length > 0 && i - k > monoDequeue[0]) monoDequeue.shift();

        score += dp[monoDequeue[0]];

        dp[i] = score;

        while (monoDequeue.length > 0 && dp[monoDequeue.at(-1)] < score) {
            monoDequeue.pop();
        }
        monoDequeue.push(i);
    }

    return dp[len - 1];
};
const nums = [1, -1, -2, 4, -7, 3],
    k = 2;
// Output: 7
/* Explanation: You can choose your jumps forming the subsequence [1,-1,4,3] (underlined above). The sum is 7. */
console.log(maxResult(nums, k));

const nums1 = [10, -5, -2, 4, 0, 3],
    k1 = 3;
// Output: 17
/* Explanation: You can choose your jumps forming the subsequence [10,4,3] (underlined above). The sum is 17. */
console.log(maxResult(nums1, k1));
