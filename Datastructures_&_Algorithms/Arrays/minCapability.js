/**
 * **2560. House Robber IV**
 *
 * There are several consecutive houses along a street, each of which has some money inside. There is also a robber, who
 * wants to steal money from the homes, but he **refuses to steal from adjacent homes**.
 *
 * The **capability** of the robber is the maximum amount of money he steals from one house of all the houses he robbed.
 *
 * You are given an integer array `nums` representing how much money is stashed in each house. More formally, the `ith`
 * house from the left has `nums[i]` dollars.
 *
 * You are also given an integer `k`, representing the **minimum** number of houses the robber will steal from. It is
 * always possible to steal at least `k` houses.
 *
 * Return the **minimum** capability of the robber out of all the possible ways to steal at least `k` houses.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 * - `1 <= k <= (nums.length + 1)/2`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCapability = function (nums, k) {
    let lo = Math.min(...nums);
    let hi = Math.max(...nums);
    let ans = hi;

    // Function to check if we can rob at least k houses with capability cap.
    const canRob = (cap) => {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            // If the current house is eligible, rob it and skip the next one.
            if (nums[i] <= cap) {
                count++;
                i++; // Skip the next house since adjacent cannot be robbed
            }
        }
        return count >= k;
    };

    // Binary search for the minimum valid capability
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (canRob(mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return ans;
};
