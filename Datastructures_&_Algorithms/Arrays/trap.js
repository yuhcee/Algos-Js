/**
 * **42. Trapping Rain Water**
 *
 * Given `n` non-negative integers representing an elevation map where the width
 * of each bar is `1`, compute how much
 * water it can trap after raining.
 *
 * **Constraints:**
 *
 * - `n == height.length`
 * - `1 <= n <= 2 * 104`
 * - `0 <= height[i] <= 105`
 *
 * @param {number[]} height
 * @return {number}
 *
 */
const trap = function (height) {
    let left = 0,
        right = height.length - 1,
        trappedWater = 0,
        leftMax = 0,
        rightMax = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6
/* Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. */
console.log(trap(height));

const height1 = [4, 2, 0, 3, 2, 5];
// Output: 9
console.log(trap(height1));
