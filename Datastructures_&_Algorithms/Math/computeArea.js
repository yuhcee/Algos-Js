/**
 * **223. Rectangle Area**
 *
 * Given the coordinates of two **rectilinear** rectangles in a 2D plane, return
 * *the total area covered by the two rectangles*.
 *
 * The first rectangle is defined by its **bottom-left** corner `(ax1, ay1)` and its
 * **top-right** corner `(ax2, ay2)`.
 *
 * The second rectangle is defined by its **bottom-left** corner `(bx1, by1)` and
 * its **top-right** corner `(bx2, by2)`.
 *
 * **Constraints:**
 *
 * - `-104 <= ax1 <= ax2 <= 104`
 * - `-104 <= ay1 <= ay2 <= 104`
 * - `-104 <= bx1 <= bx2 <= 104`
 * - `-104 <= by1 <= by2 <= 104`
 *
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const maxStart1 = Math.max(ax1, bx1);
    const minEnd1 = Math.min(ax2, bx2);

    const width = Math.abs(maxStart1 - minEnd1);

    const minStart2 = Math.min(ay2, by2);
    const maxEnd2 = Math.max(ay1, by1);

    const height = Math.abs(minStart2 - maxEnd2);

    
};

const ax1 = -3,
    ay1 = 0,
    ax2 = 3,
    ay2 = 4,
    bx1 = 0,
    by1 = -1,
    bx2 = 9,
    by2 = 2;
// Output: 45
console.log(computeArea((ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)));

const ax11 = -2,
    ay11 = -2,
    ax22 = 2,
    ay22 = 2,
    bx11 = -2,
    by11 = -2,
    bx22 = 2,
    by22 = 2;
// Output: 16

console.log(computeArea((ax11, ay11, ax22, ay22, bx11, by11, bx22, by22)));
