/**
 * **42. Trapping Rain Water**
 *
 * Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much
 * water it can trap after raining.
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    let left = 0,
        right = height.length - 1,
        trappedWater = 0,
        leftMax = 0,
        rightMax = 0;
};
