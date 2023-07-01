/**
 * **2305. Fair Distribution of Cookies**
 *
 * You are given an integer array `cookies`, where `cookies[i]` denotes the number of cookies in the
 * `ith` bag. You are also given an integer `k` that denotes the number of children to distribute all
 * the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be
 * split up.
 *
 * The **unfairness** of a distribution is defined as the **maximum total** cookies obtained by a
 * single child in the distribution.
 *
 * Return *the **minimum** unfairness of all distributions*.
 *
 * **Constraints:**
 *
 * - `2 <= cookies.length <= 8`
 * - `1 <= cookies[i] <= 105`
 * - `2 <= k <= cookies.length`
 *
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
const distributeCookies = function (cookies, k) {
    let ans = Infinity; // Initialize the minimum unfairness to infinity
    let bag = Array(k).fill(0); // Create an array to represent the bags of cookies for each child

    // Backtracking function to distribute cookies
    function backtrack(i) {
        if (i >= cookies.length) {
            let max = -Infinity; // Track the maximum number of cookies received by a child
            for (let b of bag) {
                max = Math.max(max, b); // Update the maximum number of cookies
            }
            ans = Math.min(ans, max); // Update the minimum unfairness
            return;
        }

        // Distribute the current cookie to each child and recurse
        for (let j = 0; j < k; j++) {
            bag[j] += cookies[i]; // Add the current cookie to the j-th bag
            backtrack(i + 1); // Recurse to the next cookie
            bag[j] -= cookies[i]; // Undo the distribution for backtracking
        }
    }

    backtrack(0); // Start distributing cookies from the first one

    return ans; // Return the minimum unfairness
};
