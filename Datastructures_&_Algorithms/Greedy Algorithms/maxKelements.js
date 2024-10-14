/**
 * **2530. Maximal Score After Applying K Operations**
 *
 * You are given a **0-indexed** integer array `nums` and an integer `k`. You
 * have a **starting score** of `0`.
 *
 * In one **operation**:
 *
 * 1. choose an index `i` such that `0 <= i < nums.length`,
 * 2. increase your **score** by `nums[i]`, and
 * 3. replace `nums[i]` with `ceil(nums[i] / 3)`.
 * Return *the maximum possible **score** you can attain after applying
 * **exactly** `k` operations*.
 *
 * The ceiling function `ceil(val)` is the least integer greater than or equal
 * to `val`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length, k <= 105`
 * - `1 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxKelements = function (nums, k) {
    // Create a max heap by pushing negative values since PriorityQueue is a min-heap
    const heap = new MaxPriorityQueue({ priority: (x) => x });

    // Push all elements into the max-heap
    for (const num of nums) {
        heap.enqueue(num);
    }

    let score = 0;

    // Perform k operations
    for (let i = 0; i < k; i++) {
        // Get the largest element from the heap
        let largest = heap.dequeue().element;

        // Add the largest element to the score
        score += largest;

        // Replace the largest element with ceil(largest / 3) and push back to the heap
        let newVal = Math.ceil(largest / 3);
        heap.enqueue(newVal);
    }

    return score;
};

const nums = [10, 10, 10, 10, 10],
    k = 5;
// Output: 50
/* Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50. */
console.log(maxKelements(nums, k));

const nums1 = [1, 10, 3, 3, 3],
    k1 = 3;
// Output: 17
/* Explanation: You can do the following operations:
Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
The final score is 10 + 4 + 3 = 17. */
console.log(maxKelements(nums1, k1));
