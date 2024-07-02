/**
 * **350. Intersection of Two Arrays II**
 *
 * Given two integer arrays `nums1` and `nums2`, return *an array of their
 * intersection*. Each element in the result must appear as many times as it
 * shows in both arrays and you may return the result in **any order**.
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
const intersect = function (nums1, nums2) {
    const frequencyTable = {};
    const intersection = [];

    for (const number of nums1) {
        if (!(number in frequencyTable)) {
            frequencyTable[number] = 0;
        }
        frequencyTable[number]++;
    }

    for (const number of nums2) {
        if (number in frequencyTable && frequencyTable[number] > 0) {
            intersection.push(number);
            frequencyTable[number]--;
        }
    }

    return intersection;
};

const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
// Output: [2,2]
console.log(intersect(nums1, nums2));
