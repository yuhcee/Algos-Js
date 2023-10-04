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
    bucket.push([key, value]);
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

const Input = ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'][([], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2])];
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

// Explanation
const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
