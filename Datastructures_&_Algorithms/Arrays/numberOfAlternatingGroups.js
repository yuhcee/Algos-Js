/**
 * **3208. Alternating Groups II**
 *
 * There is a circle of red and blue tiles. You are given an array of integers `colors`
 * and an integer `k`. The color of tile `i` is represented by `colors[i]`:
 *
 * - `colors[i] == 0` means that tile `i` is **red**.
 * - `colors[i] == 1` means that tile `i` is **blue**.
 *
 * An **alternating** group is every k contiguous tiles in the circle with
 * **alternating** colors (each tile in the group except the first and last one has a
 * different color from its **left** and **right** tiles).
 *
 * Return the number of **alternating** groups.
 *
 * **Note** that since colors represents a **circle**, the **first** and the **last**
 * tiles are considered to be next to each other.
 *
 * **Constraints:**
 *
 * - `3 <= colors.length <= 105`
 * - `0 <= colors[i] <= 1`
 * - `3 <= k <= colors.length`
 *
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
const numberOfAlternatingGroups = function (colors, k) {
    const n = colors.length;
    // Extend the array by appending the first k-1 elements
    const extendedColors = colors.concat(colors.slice(0, k - 1));
    let result = 0;
    let count = 0;

    // Initialize count for the first window (positions 0 to k-1)
    for (let j = 0; j < k - 1; j++) {
        if (extendedColors[j] === extendedColors[j + 1]) {
            count++;
        }
    }
    // Check if the first window is alternating
    if (count === 0) {
        result++;
    }

    // Slide the window from position 1 to n-1
    for (let i = 1; i < n; i++) {
        // Remove the pair that leaves the window (j = i-1)
        if (extendedColors[i - 1] === extendedColors[i]) {
            count--;
        }
        // Add the new pair that enters the window (j = i+k-2)
        if (extendedColors[i + k - 2] === extendedColors[i + k - 1]) {
            count++;
        }
        // Check if the current window is alternating
        if (count === 0) {
            result++;
        }
    }

    return result;
};

const colors = [0, 1, 0, 1, 0],
    k = 3;
// Output: 3
console.log(numberOfAlternatingGroups(colors, k));

const colors1 = [0, 1, 0, 0, 1, 0, 1],
    k1 = 6;
// Output: 2
console.log(numberOfAlternatingGroups(colors1, k1));

const colors2 = [1, 1, 0, 1],
    k2 = 4;
// Output: 0
console.log(numberOfAlternatingGroups(colors2, k2));
