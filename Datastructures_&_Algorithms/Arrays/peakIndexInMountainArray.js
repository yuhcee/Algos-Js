/**
 * **852. Peak Index in a Mountain Array**
 *
 * An array `arr` is a **mountain** if the following properties hold:
 *
 * - `arr.length >= 3`
 * - There exists some `i` with `0 < i < arr.length - 1` such that:
 *  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
 *  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`
 *
 * Given a mountain array `arr`, return the index `i` such that `arr[0] < arr[1]
 * < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`.
 *
 * You must solve it in `O(log(arr.length))` time complexity.
 *
 * **Constraints:**
 *
 * - `3 <= arr.length <= 105`
 * - `0 <= arr[i] <= 106`
 * - `arr` is **guaranteed** to be a mountain array.
 *
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the middle element is greater than its neighbors
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid; // Found the peak element
        } else if (arr[mid] < arr[mid + 1]) {
            // If the middle element is less than the right neighbor, move to the right side
            left = mid + 1;
        } else {
            // If the middle element is less than the left neighbor, move to the left side
            right = mid;
        }
    }

    // If the loop ends, the left pointer points to the peak element
    return left;
};
