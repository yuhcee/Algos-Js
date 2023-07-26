/**
 * **1870. Minimum Speed to Arrive on Time**
 *
 * You are given a floating-point number `hour`, representing the amount of time you have to reach the office. To commute to the office, you
 * must take `n` trains in sequential order. You are also given an integer array `dist` of length `n`, where `dist[i]` describes the
 * distance (in kilometers) of the `ith` train ride.
 *
 * Each train can only depart at an integer `hour`, so you may need to wait in between each train ride.
 *
 * - For example, if the `1st` train ride takes `1.5` hours, you must wait for an additional `0.5` hours before you can depart on the `2nd`
 * train ride at the 2 hour mark.
 *
 * Return *the **minimum positive integer** speed (**in kilometers per hour**) that all the trains must travel at for you to reach the
 * office on time, or `-1` if it is impossible to be on time*.
 *
 * Tests are generated such that the answer will not exceed `107` and hour will have **at most two digits after the decimal point**.
 *
 * **Constraints:**
 *
 * - `n == dist.length`
 * - `1 <= n <= 105`
 * - `1 <= dist[i] <= 105`
 * - `1 <= hour <= 109`
 * - There will be at most two digits after the decimal point in `hour`.
 *
 * @param {number[]} dist - Array of distances (in kilometers) of each train ride.
 * @param {number} hour - The time available to reach the office.
 * @return {number} - The minimum positive integer speed (in kilometers per hour) needed to reach the office on time.
 */
const minSpeedOnTime = function (dist, hour) {
    const n = dist.length;
    let left = 1; // Lower bound for binary search
    let right = 10 ** 7; // Upper bound for binary search

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let totalHours = 0;

        // Calculate the total time taken at the current speed
        for (let i = 0; i < n - 1; i++) {
            totalHours += Math.ceil(dist[i] / mid); // Ceil to handle fractional hours
        }
        totalHours += dist[n - 1] / mid; // Last distance does not require waiting time

        // Compare the total time with the available time
        if (totalHours <= hour) {
            // If we can reach on time, update the answer and explore lower speeds
            right = mid - 1;
        } else {
            // If we cannot reach on time, explore higher speeds
            left = mid + 1;
        }
    }

    // The answer will be the lower bound (left) if it is possible to reach on time
    // Otherwise, return -1 indicating it is impossible to reach on time
    return left <= 10 ** 7 ? left : -1;
};

const dist = [1, 3, 2],
    hour = 6;
// Output: 1
/* Explanation: At speed 1:
- The first train ride takes 1/1 = 1 hour.
- Since we are already at an integer hour, we depart immediately at the 1 hour mark. The second train takes 3/1 = 3 hours.
- Since we are already at an integer hour, we depart immediately at the 4 hour mark. The third train takes 2/1 = 2 hours.
- You will arrive at exactly the 6 hour mark. */
console.log(minSpeedOnTime(dist, hour));
