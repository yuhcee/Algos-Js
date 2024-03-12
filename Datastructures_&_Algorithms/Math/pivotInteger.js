/**
 * **2485. Find the Pivot Integer**
 *
 * Given a positive integer `n`, find the **pivot integer** `x` such that:
 *
 * - The sum of all elements between `1` and `x` inclusively equals the sum
 * of all elements between `x` and `n` inclusively.
 *
 * Return *the pivot integer `x`. If no such integer exists, return `-1`. It
 * is guaranteed that there will be at most one pivot index for the given
 * input.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 *
 * @param {number} n
 * @return {number}
 */
const pivotInteger = (n) => {
    let low = 1,
        high = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let leftSum = (mid * (mid + 1)) / 2;
        let rightSum = (n * (n + 1)) / 2 - ((mid - 1) * mid) / 2;
        if (leftSum === rightSum) {
            return mid;
        } else if (leftSum < rightSum) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const n = 8;
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
console.log(pivotInteger(n));

const n1 = 1;
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
console.log(pivotInteger(n1));

const n2 = 4;
// Output: -1
// Explanation: It can be proved that no such integer exist.
console.log(pivotInteger(n2));
