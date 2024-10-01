/**
 * **1497. Check If Array Pairs Are Divisible by k**
 *
 * Given an array of integers `arr` of even length `n` and an integer `k`.
 *
 * We want to divide the array into exactly `n / 2` pairs such that the sum of each pair is
 * divisible by `k`.
 *
 * Return *`true` If you can find a way to do that or `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `arr.length == n`
 * - `1 <= n <= 105`
 * - `n` is even.
 * - `-109 <= arr[i] <= 109`
 * - `1 <= k <= 105`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
const canArrange = function (arr, k) {
    let remainderCount = new Array(k).fill(0);

    // Step 1: Count the frequency of each remainder
    for (let num of arr) {
        let remainder = ((num % k) + k) % k; // to handle negative numbers
        remainderCount[remainder]++;
    }

    // Step 2: Check the pairing conditions
    // Check remainder 0 first (those must be even)
    if (remainderCount[0] % 2 !== 0) return false;

    // Check for remainders r and k - r
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false;
        }
    }

    return true;
};

const arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
    k = 5;
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
console.log(canArrange(arr, k));
