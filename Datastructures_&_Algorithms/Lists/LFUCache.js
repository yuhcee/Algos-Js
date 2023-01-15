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

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return;

    if (this.cache.size == this.capacity && !this.cache.has(key)) {
        let keyToDelete = this.count.get(this.minCount).values().next().value;
        this.cache.delete(keyToDelete);
        this.count.get(this.minCount).delete(keyToDelete);
        if (this.count.get(this.minCount).size == 0) this.count.delete(this.minCount);
    }

    if (this.cache.has(key)) {
        let count = this.cache.get(key).count;
        this.cache.set(key, { value: value, count: count + 1 });
        this.increaseCount(key, count);
    } else {
        this.cache.set(key, { value: value, count: 1 });
        this.increaseCount(key, 0);
        this.minCount = 1;
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const input = ['LFUCache', 'put', 'put', 'get', 'put', 'get', 'get', 'put', 'get', 'get', 'get'][([2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4])];
// Output[(null, null, null, 1, null, -1, 3, null, -1, 3, 4)];

/* Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3 */
