var ProductOfNumbers = function () {};

/**
 * **1352. Product of the Last K Numbers**
 *
 * Design an algorithm that accepts a stream of integers and retrieves the
 * product of the last `k` integers of the stream.
 *
 * Implement the `ProductOfNumbers` class:
 *
 * - `ProductOfNumbers()` Initializes the object with an empty stream.
 * - `void add(int num)` Appends the integer `num` to the stream.
 * - `int getProduct(int k)` Returns the product of the last `k` numbers in
 * the current list. You can assume that always the current list has at
 * least `k` numbers.
 *
 * The test cases are generated so that, at any time, the product of any
 * contiguous sequence of numbers will fit into a single 32-bit integer
 * without overflowing.
 *
 * **Constraints:**
 *
 * - `0 <= num <= 100`
 * - `1 <= k <= 4 * 10^4`
 * - At most `4 * 10^4` calls will be made to `add` and `getProduct`.
 * - The product of the stream at any point in time will fit in a
 * **32-bit** integer.
 *
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
