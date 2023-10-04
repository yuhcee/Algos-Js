/**
 * **706. Design HashMap**
 *
 * Design a HashMap without using any built-in hash table libraries.
 *
 * Implement the `MyHashMap` class:
 *
 * - `MyHashMap()` initializes the object with an empty map.
 * - `void put(int key, int value)` inserts a `(key, value)` pair
 * into the HashMap. If the `key` already exists in the map, update
 * the corresponding `value`.
 * - `int get(int key)` returns the `value` to which the specified
 * `key` is mapped, or `-1` if this map contains no mapping for the
 * `key`.
 * - `void remove(key)` removes the `key` and its corresponding
 * `value` if the map contains the mapping for the `key`.
 *
 * **Constraints:**
 *
 * - `0 <= key, value <= 106`
 * - At most `104` calls will be made to `put`, `get`, and `remove`.
 *
 */
const MyHashMap = function () {
    this.size = 1000;
    this.buckets = Array(this.size)
        .fill(null)
        .map(() => []);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const index = key % this.size;
    const bucket = this.buckets[index];

    for (let pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value;
            return;
        }
    }
    bucket.push([key, pair]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const index = key % this.size;
    const bucket = this.buckets[index];

    for (let pair of bucket) {
        if (pair[0] === key) {
            return pair[1];
        }
    }
    return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const index = key % this.size;
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
