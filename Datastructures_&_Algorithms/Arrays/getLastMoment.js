/**
 * **1503. Last Moment Before All Ants Fall Out of a Plank**
 *
 * We have a wooden plank of the length `n` **units**. Some ants are
 * walking on the plank, each ant moves with a speed of **1 unit per
 * second**. Some of the ants move to the **left**, the other move to
 * the **right**.
 *
 * When two ants moving in two **different** directions meet at some
 * point, they change their directions and continue moving again.
 * Assume changing directions does not take any additional time.
 *
 * When an ant reaches **one end** of the plank at a time `t`, it
 * falls out of the plank immediately.
 *
 * Given an integer `n` and two integer arrays `left` and `right`,
 * the positions of the ants moving to the left and the right, return
 * *the moment when the last ant(s) fall out of the plank*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 104`
 * - `0 <= left.length <= n + 1`
 * - `0 <= left[i] <= n`
 * - `0 <= right.length <= n + 1`
 * - `0 <= right[i] <= n`
 * - `1 <= left.length + right.length <= n + 1`
 * - All values of `left` and `right` are unique, and each value can
 * appear **only in one** of the two arrays.
 *
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = function (n, left, right) {
    // The last moment for ants moving to the left is the maximum value in the left array
    let maxLeft = left.length > 0 ? Math.max(...left) : 0;

    // The last moment for ants moving to the right is the distance from the minimum value in the right array to the end of the plank
    let maxRight = right.length > 0 ? n - Math.min(...right) : 0;

    // The last moment when the last ant falls is the maximum of maxLeft and maxRight
    return Math.max(maxLeft, maxRight);
};

const n = 4,
    left = [4, 3],
    right = [0, 1];
// Output: 4
/* Explanation: In the image above:
-The ant at index 0 is named A and going to the right.
-The ant at index 1 is named B and going to the right.
-The ant at index 3 is named C and going to the left.
-The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank). */
console.log(getLastMoment(n, left, right));
