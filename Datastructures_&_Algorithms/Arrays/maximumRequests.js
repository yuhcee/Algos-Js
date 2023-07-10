/**
 * **1601. Maximum Number of Achievable Transfer Requests**
 *
 * We have `n` buildings numbered from `0` to `n - 1`. Each building has a number of employees. It's
 * transfer season, and some employees want to change the building they reside in.
 *
 * You are given an array `requests` where `requests[i] = [fromi, toi]` represents an employee's request to
 * transfer from building `fromi` to building `toi`.
 *
 * **All buildings are full**, so a list of requests is achievable only if for each building, the **net
 * change in employee transfers is zero**. This means the number of employees **leaving** is **equal** to
 * the number of employees **moving in**. For example if `n = 3` and two employees are leaving building
 * `0`, one is leaving building `1`, and one is leaving building `2`, there should be two employees moving
 * to building `0`, one employee moving to building `1`, and one employee moving to building `2`.
 *
 * Return *the maximum number of achievable requests*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 20`
 * - `1 <= requests.length <= 16`
 * - `requests[i].length == 2`
 * - `0 <= fromi, toi < n`
 *
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
const maximumRequests = function (n, requests) {
    const m = requests.length; // Number of requests
    let maxAchievable = 0; // Maximum number of achievable requests

    // Backtracking function to calculate the net change in each building
    function backtrack(idx, count, balance) {
        if (idx === m) {
            if (balance.every((b) => b === 0)) {
                maxAchievable = Math.max(maxAchievable, count);
            }
            return;
        }

        const [from, to] = requests[idx];
        balance[from]--; // Decrement the outgoing building
        balance[to]++; // Increment the incoming building

        backtrack(idx + 1, count + 1, balance); // Include the current request
        balance[from]++; // Undo the decrement
        balance[to]--; // Undo the increment

        backtrack(idx + 1, count, balance); // Exclude the current request
    }

    const balance = Array(n).fill(0); // Array to track the net change in each building

    backtrack(0, 0, balance); // Start the backtracking process

    return maxAchievable; // Return the maximum number of achievable requests
};

const n = 5,
    requests = [
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 2],
        [2, 0],
        [3, 4],
    ];
// Output: 5
/* Explantion: Let's see the requests:
From building 0 we have employees x and y and both want to move to building 1.
From building 1 we have employees a and b and they want to move to buildings 2 and 0 respectively.
From building 2 we have employee z and they want to move to building 0.
From building 3 we have employee c and they want to move to building 4.
From building 4 we don't have any requests.
We can achieve the requests of users x and b by swapping their places.
We can achieve the requests of users y, a and z by swapping the places in the 3 buildings. */
console.log(maximumRequests(n, requests));
