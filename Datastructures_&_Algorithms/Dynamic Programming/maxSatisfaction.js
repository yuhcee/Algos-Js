/**
 * **1402. Reducing Dishes**
 *
 * A chef has collected data on the `satisfaction` level of his `n` dishes. Chef can
 * cook any dish in 1 unit of time.
 *
 * **Like-time coefficient** of a dish is defined as the time taken to cook that dish
 * including previous dishes multiplied by its satisfaction level  i.e.  `time[i] *
 * satisfaction[i]`
 *
 * Return the maximum sum of **Like-time coefficient** that the chef can obtain after
 * dishes preparation.
 *
 * Dishes can be prepared in **any** order and the chef can discard some dishes to get
 * this maximum value.
 *
 *
 * **Constraints:**
 *
 * - `n == satisfaction.length`
 * - `1 <= n <= 500`
 * - `-10^3 <= satisfaction[i] <= 10^3`
 *
 *
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = function (arr) {
    arr.sort((a, b) => a - b);
    let sum = 0,
        res = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
        if (sum < 0) {
            break;
        }
        res += sum;
    }

    return res;
};

const satisfaction = [-1, -8, 0, 5, -9];
// Output: 14
// Explanation: After Removing the second and last dish, the maximum total
// Like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
console.log(maxSatisfaction(satisfaction));

const satisfaction1 = [4, 3, 2];
// Output: 20
// Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
console.log(maxSatisfaction(satisfaction1));
