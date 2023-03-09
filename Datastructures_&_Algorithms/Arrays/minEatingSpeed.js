/**
 * **875. Koko Eating Bananas**
 *
 * Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas.
 * The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of
 * bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all
 * of them instead and will not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 *
 * Return *the minimum integer `k` such that she can eat all the bananas within `h` hours*.
 *
 * **Constraints:**
 *
 * - `1 <= piles.length <= 104`
 * - `piles.length <= h <= 109`
 * - `1 <= piles[i] <= 109`
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = 1e9;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const hoursNeeded = calcHours(mid);

        if (h < hoursNeeded) left = mid + 1;
        else right = mid;
    }

    return left;

    function calcHours(k) {
        let count = 0;

        for (const pile of piles) {
            count += Math.ceil(pile / k);
        }

        return count;
    }
};

const piles = [3, 6, 7, 11],
    h = 8;
// Output: 4
console.log(minEatingSpeed(piles, h));
