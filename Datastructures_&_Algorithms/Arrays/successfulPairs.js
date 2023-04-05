/**
 * **2300. Successful Pairs of Spells and Potions**
 *
 * You are given two positive integer arrays `spells` and `potions`, of length `n` and `m`
 * respectively, where `spells[i]` represents the strength of the `ith` spell and `potions[j]`
 * represents the strength of the `jth` potion.
 *
 * You are also given an integer `success`. A spell and potion pair is considered **successful** if
 * the **product** of their strengths is **at least** `success`.
 *
 * Return *an integer array `pairs` of length `n` where `pairs[i]` is the number of **potions** that
 * will form a successful pair with the `ith` spell*.
 *
 * **Constraints:
 *
 * - `n == spells.length`
 * - `m == potions.length`
 * - `1 <= n, m <= 105`
 * - `1 <= spells[i], potions[i] <= 105`
 * - `1 <= success <= 1010`
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function (spells, potions, success) {
    let res = [];
    potions.sort((a, b) => b - a);
    let map = new Map();

    for (let i = 0; i < spells.length; i++) {
        if (!map.has(spells[i])) {
            let s = success / spells[i];
            let len = search(potions, s);
            res.push(len);
            map.set(spells[i], len);
        } else {
            let len = map.get(spells[i]);
            res.push(len);
        }
    }

    return res;
};

function search(potions, target) {
    let res = 0;
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (potions[mid] < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
            res = mid + 1;
        }
    }

    return res;
}
