/**
 * **1921. Eliminate Maximum Number of Monsters**
 *
 * You are playing a video game where you are defending your city from
 * a group of `n` monsters. You are given a **0-indexed** integer
 * array `dist` of size `n`, where `dist[i]` is the **initial
 * distance** in kilometers of the `ith` monster from the city.
 *
 * The monsters walk toward the city at a **constant** speed. The
 * speed of each monster is given to you in an integer array `speed`
 * of size `n`, where `speed[i]` is the speed of the `ith` monster in
 * kilometers per minute.
 *
 * You have a weapon that, once fully charged, can eliminate a
 * **single** monster. However, the weapon takes **one minute** to
 * charge. The weapon is fully charged at the very start.
 *
 * You lose when any monster reaches your city. If a monster reaches
 * the city at the exact moment the weapon is fully charged, it counts
 * as a **loss**, and the game ends before you can use your weapon.
 *
 * Return *the **maximum** number of monsters that you can eliminate
 * before you lose, or `n` if you can eliminate all the monsters
 * before they reach the city.
 *
 * **Constraints:**
 *
 * - `n == dist.length == speed.length`
 * - `1 <= n <= 105`
 * - `1 <= dist[i], speed[i] <= 105`
 *
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
const eliminateMaximum = function (dist, speed) {
    // Calculate the time it takes for each monster to reach the city
    let times = dist.map((d, i) => Math.ceil(d / speed[i]));

    // Sort the times in ascending order
    times.sort((a, b) => a - b);

    // Go through each monster and eliminate as many as possible
    for (let i = 0; i < times.length; i++) {
        // If the time for this monster to reach the city is less than or equal to i,
        // it means we can't eliminate it before it reaches the city
        if (times[i] <= i) {
            return i; // Return the number of monsters eliminated so far
        }
    }

    // If we've gone through all monsters, return the total number
    return times.length;
};

const dist = [1, 3, 4],
    speed = [1, 1, 1];
// Output: 3
/* Explanation:
In the beginning, the distances of the monsters are [1,3,4]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,2,3]. You eliminate the second monster.
After a minute, the distances of the monsters are [X,X,2]. You eliminate the thrid monster.
All 3 monsters can be eliminated. */
console.log(eliminateMaximum(dist, speed));

const dist1 = [1, 1, 2, 3],
    speed1 = [1, 1, 1, 1];
// Output: 1
/* Explanation:
In the beginning, the distances of the monsters are [1,1,2,3]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,0,1,2], so you lose.
You can only eliminate 1 monster. */
console.log(eliminateMaximum(dist1, speed1));
