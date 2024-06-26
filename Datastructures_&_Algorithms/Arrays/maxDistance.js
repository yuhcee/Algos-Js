/**
 * **1552. Magnetic Force Between Two Balls**
 *
 * In the universe Earth C-137, Rick discovered a special form of magnetic force
 * between two balls if they are put in his new invented basket.
 *
 * Rick has `n` empty baskets, the `ith` basket is at `position[i]`, Morty has
 * `m` balls and needs to distribute the balls into the baskets such that the
 * **minimum magnetic force** between any two balls is **maximum**.
 *
 * Rick stated that magnetic force between two different balls at positions `x`
 * and `y` is `|x - y|`.
 *
 * Given the integer array `position` and the integer m. Return the required
 * force.
 *
 * **Constraints:**
 *
 * - `n == position.length`
 * - `2 <= n <= 105`
 * - `1 <= position[i] <= 109`
 * - All integers in `position` are **distinct**.
 * - `2 <= m <= position.length`
 *
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const maxDistance = function (position, m) {
    position.sort((a, b) => a - b); // Sort the positions array

    const canPlaceBalls = (minDist) => {
        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= minDist) {
                count++;
                lastPosition = position[i];
                if (count >= m) {
                    return true;
                }
            }
        }

        return false;
    };

    let low = 1;
    let high = position[position.length - 1] - position[0];

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canPlaceBalls(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
};

const position = [1, 2, 3, 4, 7],
    m = 3;
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
console.log(maxDistance(position, m));

const position1 = [5, 4, 3, 2, 1, 1000000000],
    m1 = 2;
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.
console.log(maxDistance(position1, m1));
