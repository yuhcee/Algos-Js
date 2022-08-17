/**
 *
 * You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and
 * `n`, representing the number of elements in `nums1` and `nums2` respectively.
 *
 * **Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.
 *
 * The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To
 * accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be
 * merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let p1 = nums1.length - n - 1;
    let p2 = nums2.length - 1;

    for (let i = m + n - 1; i >= 0; i -= 1) {
        if (p2 === -1) continue;

        if (p1 === -1) {
            nums1[i] = nums2[p2];
            p2 -= 1;
            continue;
        }

        if (nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1];
            p1 -= 1;
        } else {
            nums1[i] = nums2[p2];
            p2 -= 1;
        }
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pointer1 = m - 1,
        pointer2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (pointer2 < 0) break;

        if (nums1[pointer1] > nums2[pointer2]) {
            nums1[i] = nums1[pointer1--];
        } else {
            nums1[i] = nums2[pointer2--];
        }
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pointer1 = m - 1,
        pointer2 = n - 1;

    for (let index = m + n - 1; index >= 0; index--) {
        if (pointer2 < 0) {
            break;
        }
        const numberOnTheLeft = nums1[pointer1];
        const numberOnTheRight = nums2[pointer2];

        if (numberOnTheLeft > numberOnTheRight) {
            nums1[index] = numberOnTheLeft;
            pointer1--;
        } else {
            nums1[index] = numberOnTheRight;
            pointer2--;
        }
    }
};
