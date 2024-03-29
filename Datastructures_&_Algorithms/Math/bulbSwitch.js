/**
 * **319. Bulb Switcher**
 *
 * There are `n` bulbs that are initially off. You first turn on all the bulbs, then
 * you turn off every second bulb.
 *
 * On the third round, you toggle every third bulb (turning on if it's off or turning
 * off if it's on). For the `i`th round, you toggle every `i` bulb. For the `n`th
 * round, you only toggle the last bulb.
 *
 * Return *the number of bulbs that are on after `n` rounds*.
 *
 * **Constraints:**
 *
 * - `0 <= n <= 109`
 *
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};

const n = 3;
// Output: 1
/* Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on. */
console.log(bulbSwitch(n));

const n1 = 0;
// Output: 0
console.log(bulbSwitch(n1));

const n2 = 1;
// Output: 1
console.log(bulbSwitch(n2));
