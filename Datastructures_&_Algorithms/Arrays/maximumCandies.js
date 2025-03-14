/**
 * **2226. Maximum Candies Allocated to K Children**
 *
 * You are given a **0-indexed** integer array `candies`. Each element in the array denotes a pile of candies of
 * size `candies[i]`. You can divide each pile into any number of **sub piles**, but you **cannot** merge two
 * piles together.
 *
 * You are also given an integer `k`. You should allocate piles of candies to `k` children such that each child
 * gets the **same** number of candies. Each child can be allocated candies from **only one** pile of candies and
 * some piles of candies may go unused.
 *
 * Return the **maximum number of candies** each child can get.
 *
 * **Constraints:**
 *
 * - `1 <= candies.length <= 105`
 * - `1 <= candies[i] <= 107`
 * - `1 <= k <= 1012`
 *
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = function (candies, k) {
    let lo = 1;
    let hi = Math.max(...candies);
    let ans = 0;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let count = 0;
        // Calculate total number of sub-piles of size mid
        for (let candy of candies) {
            count += Math.floor(candy / mid);
        }

        // If we can form at least k piles, mid is a valid candidate.
        if (count >= k) {
            ans = mid;
            lo = mid + 1; // Try for a larger x
        } else {
            hi = mid - 1; // Try a smaller x
        }
    }

    return ans;
};
