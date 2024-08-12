/**
 * **703. Kth Largest Element in a Stream**
 *
 * Design a class to find the `kth` largest element in a stream. Note that
 * it is the `kth` largest element in the sorted order, not the `kth`
 * distinct element.
 *
 * Implement `KthLargest` class:
 *
 * - `KthLargest(int k, int[] nums)` Initializes the object with the integer
 * `k` and the stream of integers `nums`.
 *
 * - `int add(int val)` Appends the integer `val` to the stream and returns
 * the element representing the `kth` largest element in the stream.
 *
 * **Constraints:**
 *
 * - `1 <= k <= 104`
 * - `0 <= nums.length <= 104`
 * - `-104 <= nums[i] <= 104`
 * - `-104 <= val <= 104`
 * - At most `104` calls will be made to `add`.
 * - It is guaranteed that there will be at least `k` elements in the array
 * when you search for the `kth` element.
 *
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k); // Sort the initial numbers and keep only the top k elements
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.nums.length < this.k) {
        // If there are less than k elements in the array, simply push the new value and sort the array
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
    } else if (val > this.nums[this.k - 1]) {
        // If the new value is larger than the kth largest element, replace it and sort the array
        this.nums[this.k - 1] = val;
        this.nums.sort((a, b) => b - a);
    }

    return this.nums[this.k - 1]; // Return the kth largest element
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const data = ['KthLargest', 'add', 'add', 'add', 'add', 'add'][([3, [4, 5, 8, 2]], [3], [5], [10], [9], [4])];
// Output
// [null, 4, 5, 5, 8, 8]

/* Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8 */
