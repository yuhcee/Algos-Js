/**
 * **705. Design HashSet**
 *
 * Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 *
 * - void add(key) Inserts the value key into the HashSet.
 * - bool contains(key) Returns whether the value key exists in the HashSet or not.
 * - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 */

const MyHashSet = function () {
    this.hashSet = new Set();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.hashSet.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.hashSet.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.hashSet.has(key);
};

const myHashSet = new MyHashSet();
myHashSet.add(1);
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.contains(1)); // return True
console.log(myHashSet.contains(3)); // return False, (not found)
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.contains(2)); // return True
myHashSet.remove(2); // set = [1]
console.log(myHashSet.contains(2)); // return False, (already removed)
