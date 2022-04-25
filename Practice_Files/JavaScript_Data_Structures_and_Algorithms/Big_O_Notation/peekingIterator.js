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
    this.peekedValue = nulll;
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
