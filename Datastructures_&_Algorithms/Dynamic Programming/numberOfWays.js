/**
 * **2147. Number of Ways to Divide a Long Corridor**
 *
 * Along a long library corridor, there is a line of seats and decorative
 * plants. You are given a **0-indexed** string `corridor` of length `n`
 * consisting of letters `'S'` and `'P'` where each `'S'` represents a
 * seat and each `'P'` represents a plant.
 *
 * One room divider has **already** been installed to the left of index
 * `0`, and **another** to the right of index `n - 1`. Additional room
 * dividers can be installed. For each position between indices `i - 1`
 * and `i` (`1 <= i <= n - 1`), at most one divider can be installed.
 *
 * Divide the corridor into non-overlapping sections, where each section
 * has **exactly two seats** with any number of plants. There may be
 * multiple ways to perform the division. Two ways are **different** if
 * there is a position with a room divider installed in the first way but
 * not in the second way.
 *
 * Return *the number of ways to divide the corridor*. Since the answer
 * may be very large, return it **modulo 109 + 7**. If there is no way,
 * return `0`.
 *
 * **Constraints:**
 *
 * - `n == corridor.length`
 * - `1 <= n <= 105`
 * - `corridor[i]` is either `'S'` or `'P'`.
 *
 * @param {string} corridor
 * @return {number}
 */
const numberOfWays = function (corridor) {
    const MOD = 1000000007;
    let seatCount = 0,
        ways = 1,
        plantCount = 0,
        pairCount = 0;

    // Count the total number of seats
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') seatCount++;
    }

    // If the total number of seats is not even or zero, return 0
    if (seatCount === 0 || seatCount % 2 !== 0) return 0;

    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            pairCount++;
            // For every second seat in a pair after the first pair
            if (pairCount > 2 && pairCount % 2 === 0) {
                ways = (ways * (plantCount + 1)) % MOD;
                plantCount = 0;
            }
        } else if (pairCount >= 2 && pairCount % 2 === 0) {
            plantCount++;
        }
    }

    return ways;
};
