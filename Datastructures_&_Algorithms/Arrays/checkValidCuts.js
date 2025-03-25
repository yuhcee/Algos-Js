/**
 * **3394. Check if Grid can be Cut into Sections**
 *
 * You are given an integer `n` representing the dimensions of an `n x n` grid, with the origin at the bottom-left corner
 * of the grid. You are also given a 2D array of coordinates `rectangles`, where `rectangles[i]` is in the form `[startx,
 * starty, endx, endy]`, representing a rectangle on the grid. Each rectangle is defined as follows:
 *
 * - `(startx, starty)`: The bottom-left corner of the rectangle.
 * - `(endx, endy)`: The top-right corner of the rectangle.
 *
 * **Note** that the rectangles do not overlap. Your task is to determine if it is possible to make **either two
 * horizontal or two vertical** cuts on the grid such that:
 *
 * - Each of the three resulting sections formed by the cuts contains **at least** one rectangle.
 * - Every rectangle belongs to **exactly** one section.
 *
 * Return `true` if such cuts can be made; otherwise, return `false`.
 *
 *
 * **Constraints:**
 *
 * - `3 <= n <= 109`
 * - `3 <= rectangles.length <= 105`
 * - `0 <= rectangles[i][0] < rectangles[i][2] <= n`
 * - `0 <= rectangles[i][1] < rectangles[i][3] <= n`
 * - No two rectangles overlap.
 *
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const checkValidCuts = function (n, rectangles) {
    return canCut(rectangles, 0) || canCut(rectangles, 1);
};

function canCut(rectangles, axis) {
    rectangles.sort((a, b) => a[axis] - b[axis]);
    let cuts = 0,
        previousEnd = -1;

    for (let rect of rectangles) {
        let start = rect[axis],
            end = rect[axis + 2];

        if (start >= previousEnd) cuts++;
        previousEnd = Math.max(previousEnd, end);
        if (cuts >= 3) return true;
    }

    return false;
}

const n = 5,
    rectangles = [
        [1, 0, 5, 2],
        [0, 2, 2, 4],
        [3, 2, 5, 3],
        [0, 4, 4, 5],
    ];
// Output: true
// Explanation: The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.
console.log(checkValidCuts(n, rectangles));
