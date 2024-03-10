/**
 * **349. Intersection of Two Arrays**
 *
 * Given two integer arrays `nums1` and `nums2`, return *an array of their
 * intersection*. Each element in the result must be **unique** and you may
 * return the result in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= nums1.length, nums2.length <= 1000`
 * - `0 <= nums1[i], nums2[i] <= 1000`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const set = new Set(nums1);
    const intersectionSet = new Set();

    // Check for common elements in nums2
    for (let num of nums2) {
        if (set.has(num)) {
            intersectionSet.add(num);
        }
    }

    // Convert the intersection set to an array and return
    return Array.from(intersectionSet);
};

const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
// Output: [2]
console.log(intersection(nums1, nums2));

