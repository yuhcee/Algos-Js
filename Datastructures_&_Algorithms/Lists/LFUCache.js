/**
 * **460. LFU Cache**
 *
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 *
 * Implement the `LFUCache` class:
 *
 * - `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
 * - `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns
 * `-1`.
 * - `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if
 * not already present. When the cache reaches its `capacity`, it should invalidate and remove the
 * **least frequently used** key before inserting a new item. For this problem, when there is a tie (i.
 * e., two or more keys with the same frequency), the **least recently used** `key` would be invalidated.
 *
 * To determine the least frequently used key, a **use counter** is maintained for each key in the
 * cache. The key with the smallest **use counter** is the least frequently used key.
 *
 * When a key is first inserted into the cache, its **use counter** is set to `1` (due to the `put`
 * operation). The **use counter** for a key in the cache is incremented either a get or put operation
 * is called on it.
 *
 * The functions `get` and `put` must each run in `O(1)` average time complexity.
 *
 * **Constraints:**
 *
 * - `0 <= capacity <= 104`
 * - `0 <= key <= 105`
 * - `0 <= value <= 109`
 * - At most 2 * 105 calls will be made to get and put.
 *
 * @param {number} capacity
 */
const LFUCache = function (capacity) {
    this.cache = new Map();
    this.count = new Map();
    this.capacity = capacity;
    this.minCount = 1;

    this.increaseCount = (key, count) => {
        if (count) {
            this.count.get(count).delete(key);
            if (this.count.get(count).size == 0) {
                this.count.delete(count);
                if (this.minCount == count) this.minCount++;
            }
        }
        count++;
        if (!this.count.get(count)) {
            this.count.set(count, new Set([key]));
        } else {
            this.count.get(count).add(key);
        }
    };
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (this.cache.get(key)) {
        this.increaseCount(key, this.cache.get(key).count);
        this.cache.get(key).count++;
        return this.cache.get(key).value;
    }
    return -1;
};