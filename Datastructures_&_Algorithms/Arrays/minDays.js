/**
 * **1482. Minimum Number of Days to Make m Bouquets**
 *
 * You are given an integer array `bloomDay`, an integer `m` and an integer `k`.
 *
 * You want to make `m` bouquets. To make a bouquet, you need to use `k`
 * **adjacent flowers** from the garden.
 *
 * The garden consists of `n` flowers, the `ith` flower will bloom in the
 * `bloomDay[i]` and then can be used in **exactly one** bouquet.
 *
 * Return *the minimum number of days you need to wait to be able to make `m`
 * bouquets from the garden*. If it is impossible to make m bouquets return `-1`.
 *
 * **Constraints:**
 *
 * - `bloomDay.length == n`
 * - `1 <= n <= 105`
 * - `1 <= bloomDay[i] <= 109`
 * - `1 <= m <= 106`
 * - `1 <= k <= n`
 *
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;
    if (m * k > n) return -1; // If the total required flowers exceed available flowers, return -1.

    let low = 1;
    let high = Math.max(...bloomDay);

    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        return bouquets >= m;
    };

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canMakeBouquets(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

const bloomDay = [1, 10, 3, 10, 2],
    m = 3,
    k = 1;
// Output: 3
/* Explanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _]   // we can only make one bouquet.
After day 2: [x, _, _, _, x]   // we can only make two bouquets.
After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3. */
console.log(minDays(bloomDay, m, k));

const bloomDay1 = [1, 10, 3, 10, 2],
    m1 = 3,
    k1 = 2;
// Output: -1
/* Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1. */
console.log(minDays(bloomDay1, m1, k1));
