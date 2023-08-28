/**
 * **403. Frog Jump**
 *
 * A frog is crossing a river. The river is divided into some
 * number of units, and at each unit, there may or may not exist a stone.
 * The frog can jump on a stone, but it must not jump into the water.
 *
 * Given a list of `stones`' positions (in units) in sorted ascending
 * order, determine if the frog can cross the river by landing on the last
 * stone. Initially, the frog is on the first stone and assumes the first
 * jump must be `1` unit.
 *
 * If the frog's last jump was `k` units, its next jump must be either `k -
 * 1`, `k`, or `k + 1` units. The frog can only jump in the forward
 * direction.
 *
 * **Constraints:**
 *
 * - `2 <= stones.length <= 2000`
 * - `0 <= stones[i] <= 231 - 1`
 * - `stones[0] == 0`
 * - `stones` is sorted in a strictly increasing order.
 *
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = function (stones) {
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    dp[0][0] = true; // The first stone is always reachable with a jump size of 0

    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const diff = stones[i] - stones[j];
            if (diff > j + 1) {
                // If the difference between the current stone and the previous stone is greater than the maximum possible jump size (j + 1),
                // then it is not possible to reach the current stone with the given jump size
                break;
            }
            dp[i][diff] = dp[j][diff - 1] || dp[j][diff] || dp[j][diff + 1];
            if (i === n - 1 && dp[i][diff]) {
                // If we reach the last stone and it is reachable with any jump size, return true
                return true;
            }
        }
    }

    return false; // If we cannot reach the last stone, return false
};

const stones = [0, 1, 3, 5, 6, 8, 12, 17];
// Output: true
// Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
console.log(canCross(stones));
