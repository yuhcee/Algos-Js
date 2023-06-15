/**
 * **2215. Find the Difference of Two Arrays**
 *
 * Given two **0-indexed** integer arrays `nums1` and `nums2`, return *a list answer of size 2 where*:
 *
 * - `answer[0]`* is a list of all **distinct** integers in `nums1` which are **not** present in
 * `nums2`*.
 * - `answer[1]` is a list of all **distinct** integers in `nums2` which are **not** present in
 * `nums1`.
 *
 * **Note** that the integers in the lists may be returned in **any** order.
 *
 * **Constraints:**
 *
 * - `1 <= nums1.length, nums2.length <= 1000`
 * - `-1000 <= nums1[i], nums2[i] <= 1000`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1); // Create a set of all unique elements in nums1
    const set2 = new Set(nums2); // Create a set of all unique elements in nums2
    const answer = [[], []]; // Initialize the answer array

    for (const num of set1) {
        if (!set2.has(num)) {
            // If num is in set1 but not in set2, add it to answer[0]
            answer[0].push(num);
        }
    }

    for (const num of set2) {
        if (!set1.has(num)) {
            // If num is in set2 but not in set1, add it to answer[1]
            answer[1].push(num);
        }
    }

    return answer; // Return the answer array
};

const nums1 = [1, 2, 3],
    nums2 = [2, 4, 6];
// Output: [[1,3],[4,6]]
/* Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6]. */
console.log(findDifference(nums1, nums2));
