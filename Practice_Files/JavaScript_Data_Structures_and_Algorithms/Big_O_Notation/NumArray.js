/**
 * **307. Range Sum Query - Mutable**
 *
 * Given an integer array `nums`, handle multiple queries of the following types:
 *
 * 1. **Update** the value of an element in `nums`.
 * 2. Calculate the **sum** of the elements of `nums` between indices `left` and `right` inclusive
 * where `left <= right`.
 *
 * Implement the NumArray class:
 *
 * - `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
 * - `void update(int index, int val)**Updates** the value of `nums[index]` to be `val`.
 * - `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between
 * indices `left` and `right` **inclusive** `(i.e. nums[left] + nums[left + 1] + ... + nums[right])`.
 *
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.len = nums.length;
    this.nums = nums;
    this.bit = new Array(this.len).fill(0);

    // Build Tree
    for (let i = 0; i < this.len; i++) {
        this.add(i, nums[i]);
    }
};

NumArray.prototype.add = function (idx, val) {
    while (idx < this.len) {
        this.bit[idx] += val;
        idx = idx | (idx + 1);
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    let delta = val - this.nums[index];
    this.nums[index] = val;
    this.add(index, delta);
};
NumArray.prototype.sum = function (idx) {
    let res = 0;
    while (idx >= 0) {
        res += this.bit[idx];
        idx = (idx & (idx + 1)) - 1;
    }
    return res;
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sum(right) - this.sum(left - 1);
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

/* ["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8] */

/* Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8 */
