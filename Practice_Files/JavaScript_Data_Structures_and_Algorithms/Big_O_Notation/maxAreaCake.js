/**
 * **1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts**
 *
 * You are given a rectangular cake of size `h x w` and two arrays of integers `horizontalCuts` and
 * `verticalCuts` where:
 * - `horizontalCuts[i]` is the distance from the top of the rectangular cake to the `ith` horizontal cut
 * and similarly, and
 * - `verticalCuts[j]` is the distance from the left of the rectangular cake to the `jth` vertical cut.
 *
 * Return *the maximum area of a piece of cake after you cut at each horizontal and vertical position
 * provided in the arrays `horizontalCuts` and `verticalCuts`*. Since the answer can be a large number,
 * return this **modulo* `10^9 + 7`.
 *
 *
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxAreaCake = (h, w, horizontalCuts, verticalCuts) => {
    // init limit as BigInt
    const limit = BigInt(1e9 + 7);

    // function to get max area
    const getMaxArea = (arr, size) => {
        // sort array in ascensding order
        arr.sort((a, b) => a - b);
    };
};
