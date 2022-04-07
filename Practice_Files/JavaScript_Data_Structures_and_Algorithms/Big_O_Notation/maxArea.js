/**
 * **Container With Most Water**
 *
 * You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the
 * two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the
 * most water.
 *
 * Return *the maximum amount of water a container can store*.
 *
 * **Notice** that you may not slant the container.
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    // initialize maxArea to zero
    let maxArea = 0,
        left = 0,
        right = height.length - 1;

    // initialize two-pointers
    while (left < right) {
        // calculate currentArea
        let currentArea = Math.min(height[left], height[right]) * right - left;
        // update the maxArea
        maxArea = Math.max(maxArea, currentArea);
    }
};

const height = [1, 1]; // Output: 1
const height2 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Output: 49

console.log(maxArea(height));
