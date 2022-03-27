/**
 * **1878. Get Biggest Three Rhombus Sums in a Grid**
 *
 * You are given an `m x n` integer matrix `grid​​​`.
 *
 * A *rhombus sum* is the sum of the elements that form the *border* of a regular rhombus shape in
 * `grid​​​`. The rhombus must have the shape of a square rotated 45 degrees with each of the corners
 * centered in a grid cell. Below is an image of four valid rhombus shapes with the corresponding colored
 * cells that should be included in each *rhombus sum*:
 *
 * Note that the rhombus can have an area of 0, which is depicted by the purple rhombus in the bottom
 * right corner.
 *
 * Return the biggest three distinct rhombus sums in the grid in descending order. If there are less than
 * three distinct values, return all of them.
 *
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function (grid) {
    let small = Math.min(grid.length, grid[0].length),
        best = [];

    for (let row of grid) {
        for (let el of row) {
            if (!best.includes(el)) {
                best.push(el);
                if (best.length > 3) {
                    best.sort((a, b) => b - a);
                    best.pop();
                }
            }
        }
    }

    for (let side = 1; side <= small / 2; side++) {
        for (let row = 0; row < grid.length - side * 2; row++) {
            for (let col = side; col < grid[0].length - side; col++) {
                let area = calcAreaAt(row, col, side);

                if (!best.includes(area)) {
                    best.push(area);
                    if (best.length > 3) {
                        best.sort((a, b) => b - a);
                        best.pop();
                    }
                }
            }
        }
    }

    function calcAreaAt(i, j, sideLength) {
        let res = 0;

        for (let g = 0; g < sideLength; g++) res += grid[i++][j++];
        for (let g = 0; g < sideLength; g++) res += grid[i++][j--];
        for (let g = 0; g < sideLength; g++) res += grid[i--][j--];
        for (let g = 0; g < sideLength; g++) res += grid[i--][j++];

        return res;
    }

    return best.sort((a, b) => b - a);
};
