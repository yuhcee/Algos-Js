/**
 * **605. Can Place Flowers**
 *
 * You have a long flowerbed in which some of the plots are planted, and some are not. However,
 * flowers cannot be planted in **adjacent** plots.
 *
 * Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means
 * not empty, and an integer `n`, return *`true` if `n` new flowers can be planted in the `flowerbed`
 * without violating the no-adjacent-flowers rule and `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= flowerbed.length <= 2 * 104`
 * - `flowerbed[i]` is `0` or `1`.
 * - There are no two adjacent flowers in `flowerbed`.
 * - `0 <= n <= flowerbed.length`
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
    const length = flowerbed.length;
    let count = 0;
    let i = 0;

    while (i < length) {
        // Check if the current plot is empty (0) and its adjacent plots are also empty or out of bounds
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
            // Place a flower in the current plot
            flowerbed[i] = 1;
            count++;

            // Increment the index by 2 since the next plot must be empty
            i += 2;
        } else {
            // Move to the next plot
            i++;
        }
    }

    // Check if the required number of flowers can be placed
    return count >= n;
};

const flowerbed = [1, 0, 0, 0, 1],
    n = 1;
// Output: true
console.log(canPlaceFlowers(flowerbed, n));

const flowerbed1 = [1, 0, 0, 0, 1],
    n1 = 2;
// Output: false
console.log(canPlaceFlowers(flowerbed1, n1));
