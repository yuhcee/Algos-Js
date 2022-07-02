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

    // function to get max Difference
    const getMaxDiff = (arr, size) => {
        // sort array in ascensding order
        arr.sort((a, b) => a - b);
        // init max as larger of bottom and edge of arr
        max = Math.max(arr[0], size - arr.at(-1));
        // iterate through arr and get max diff of two consecutive elements
        for (let i = 1; i < arr.length; i++) {
            // update max if necessary
            const diff = arr[i] - arr[i - 1];
            max = Math.max(max, diff);
        }

        // return max difference as BigInt
        return BigInt(max);
    };

    const maxHeight = getMaxDiff(horizontalCuts, h);
    const maxWidth = getMaxDiff(verticalCuts, w);

    return (maxHeight * maxWidth) % limit;
};

const h = 5,
    w = 4,
    horizontalCuts = [1, 2, 4],
    verticalCuts = [1, 3];
// Output: 4
/* Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area. */
console.log(maxAreaCake(h, w, horizontalCuts, verticalCuts));

const h1 = 5,
    w1 = 4,
    horizontalCuts1 = [3, 1],
    verticalCuts1 = [1];
// Output: 6
/* Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area. */
console.log(maxAreaCake(h1, w1, horizontalCuts1, verticalCuts1));

const h2 = 5,
    w2 = 4,
    horizontalCuts2 = [3],
    verticalCuts2 = [3];
// Output: 9
console.log(maxAreaCake(h2, w2, horizontalCuts2, verticalCuts2));
