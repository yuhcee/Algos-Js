/**
 * **1726. Tuple with Same Product**
 *
 * Given an array `nums` of **distinct** positive integers, return the
 * number of tuples `(a, b, c, d)` such that `a * b = c * d` where `a`,
 * `b`, `c`, and `d` are elements of `nums`, and `a != b != c != d`.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 1000`
 * - `1 <= nums[i] <= 104`
 * - All elements in `nums` are distinct.
 *
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
    let productCount = new Map();
    let n = nums.length;
    let result = 0;

    // Store product pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];
            productCount.set(product, (productCount.get(product) || 0) + 1);
        }
    }

    // Calculate valid tuples
    for (let count of productCount.values()) {
        if (count > 1) {
            result += ((count * (count - 1)) / 2) * 8; // 8 permutations per valid tuple
        }
    }

    return result;
};

const nums = [2, 3, 4, 6];
// Output: 8
/* Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2) */
console.log(tupleSameProduct(nums));
