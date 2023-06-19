/**
 * **1732. Find the Highest Altitude**
 *
 * There is a biker going on a road trip. The road trip consists of `n + 1` points at different
 * altitudes. The biker starts his trip on point `0` with altitude equal `0`.
 *
 * You are given an integer array `gain` of length `n` where `gain[i]` is the **net gain in altitude**
 * between points `i`​​​​​​ and `i + 1` for all (`0 <= i < n`). Return *the **highest altitude** of a
 * point*.
 *
 * **Constraints:**
 *
 * - `n == gain.length`
 * - `1 <= n <= 100`
 * - `-100 <= gain[i] <= 100`
 *
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
    let highestAltitude = 0; // Variable to store the highest altitude
    let currentAltitude = 0; // Variable to track the current altitude

    for (let i = 0; i < gain.length; i++) {
        // Calculate the current altitude by adding the gain at each point
        currentAltitude += gain[i];

        // Check if the current altitude is higher than the highest altitude
        if (currentAltitude > highestAltitude) {
            highestAltitude = currentAltitude; // Update the highest altitude
        }
    }

    return highestAltitude; // Return the highest altitude
};

const gain = [-5, 1, 5, 0, -7];
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
console.log(largestAltitude(gain));
