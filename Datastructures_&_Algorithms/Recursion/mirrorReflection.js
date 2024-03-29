/**
 * **858. Mirror Reflection**
 *
 * There is a special square room with mirrors on each of the four walls. Except for the southwest corner,
 * there are receptors on each of the remaining corners, numbered `0`, `1`, and `2`.
 *
 * The square room has walls of length `p` and a laser ray from the southwest corner first meets the east
 * wall at a distance `q` from the `0th` receptor.
 *
 * Given the two integers `p` and `q`, return *the number of the receptor that the ray meets first*.
 *
 * The test cases are guaranteed so that the ray will meet a receptor eventually.
 *
 * @param {number} p
 * @param {number} q
 * @return {number}
 */

const f = (a, b) => (b ? f(b, a % b) : a);

var mirrorReflection = function (p, q) {
    if (p & 1) return q & 1 ? 1 : 0;
    if (q & 1) return 2;

    const g = f(p, q);
    return mirrorReflection((p /= g), (q /= g));
};

const p = 2,
    q = 1;
// Output: 2
// Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.
console.log(mirrorReflection(p, q));
const p1 = 3,
    q1 = 1;
// Output: 1;
console.log(mirrorReflection(p1, q1));
