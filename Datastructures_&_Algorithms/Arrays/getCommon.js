/**
 * **2540. Minimum Common Value**
 *
 * Given two integer arrays `nums1` and `nums2`, sorted in non-decreasing
 * order, return the **minimum integer common** to both arrays. If there is
 * no common integer amongst `nums1` and `nums2`, return -1.
 *
 * Note that an integer is said to be **common** to `nums1` and `nums2` if
 * both arrays have **at least one** occurrence of that integer.
 *
 * **Constraints:**
 * 
 * - `1 <= nums1.length, nums2.length <= 105`
 * - `1 <= nums1[i], nums2[j] <= 109`
 * - `Both `nums1` and `nums2` are sorted in **non-decreasing** order.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};

const nums1 = [1, 2, 3],
    nums2 = [2, 4];
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
console.log(getCommon(nums1, nums2));

const nums11 = [1, 2, 3, 6],
    nums21 = [2, 3, 4, 5];
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
console.log(getCommon(nums11, nums21));
