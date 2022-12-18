/**
 * **380. Insert Delete GetRandom O(1)**
 *
 * Implement the `RandomizedSet` class:
 *
 * - `RandomizedSet()` Initializes the `RandomizedSet` object.
 *
 * - `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not
 * present, `false` otherwise.
 *
 * - `bool remove(int val)` Removes an item val from the set if present. Returns `true` if the item was present,
 * `false` otherwise.
 *
 * - `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least
 * one element exists when this method is called). Each element must have the **same probability** of being
 * returned.
 *
 * You must implement the functions of the class such that each function works in **average** `O(1)` time
 * complexity.
 *
 * **Constraints:**
 *
 * - `-231 <= val <= 231 - 1`
 * - At most `2 * 105` calls will be made to `insert`, `remove`, and `getRandom`.
 * - There will be **at least one** element in the data structure when `getRandom` is called.
 *
 * @param {{}} map
 * @return {[]} values
 */
var RandomizedSet = function () {
    this.map = {};
    this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map[val] !== undefined) return false;
    this.map[val] = this.values.length;
    this.values.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map[val] === undefined) return false;
    const idx = this.map[val];
    delete this.map[val];
    const last = this.values.pop();
    if (this.values.length === idx) return true;
    this.map[last] = idx;
    this.values[idx] = last;
    return true;
};
