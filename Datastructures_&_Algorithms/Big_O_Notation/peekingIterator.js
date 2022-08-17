/**
 * **284. Peeking Iterator**
 *
 * Design an iterator that supports the peek operation on an existing iterator in addition to the `hasNext` and the `next` operations.
 *
 * Implement the `PeekingIterator` class:
 *
 * - `PeekingIterator(Iterator<int> nums)` Initializes the object with the given integer iterator `iterator`
 * - `int next()` Returns the next element in the array and moves the pointer to the next element.
 * - `boolean hasNext()` Returns true if there are still elements in the array.
 * - `int peek()` Returns the next element in the array without moving the pointer.
 *
 * **Note**: Each language may have a different implementation of the constructor and `Iterator`, but they
 * all support the int `next()` and boolean `hasNext()` functions.
 *
 * @param {Iterator} iterator
 */

var PeekingIterator = function (iterator) {
    this.iter = iterator;
    this.peekedValue = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    if (this.peekedValue !== null) {
        if (!this.iter.hasNext()) {
            return 'No value found';
        }
        this.peekedValue = this.iter.next();
    }
    return this.peekedValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if (this.peekedValue !== null) {
        let toReturn = this.peekedValue;
        this.peekedValue = null;
        return toReturn;
    }

    if (!this.iter.hasNext()) {
        return 'No value found';
    }

    return this.iter.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    return this.peekedValue !== null || this.iter.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

//  ["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
//  [[[1, 2, 3]], [], [], [], [], []]
//  Output [null, 1, 2, 2, 3, false]

//  Explanation
const peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next(); // return 1, the pointer moves to the next element [1,2,3].
peekingIterator.peek(); // return 2, the pointer does not move [1,2,3].
peekingIterator.next(); // return 2, the pointer moves to the next element [1,2,3]
peekingIterator.next(); // return 3, the pointer moves to the next element [1,2,3]
peekingIterator.hasNext(); // return False
