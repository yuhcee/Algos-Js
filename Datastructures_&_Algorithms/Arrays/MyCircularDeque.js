/**
 * **641. Design Circular Deque**
 *
 * Design your implementation of the circular double-ended queue (deque).
 *
 * Implement the `MyCircularDeque` class:
 *
 * - `MyCircularDeque(int k)` Initializes the deque with a maximum size of
 * `k`.
 * - `boolean insertFront()` Adds an item at the front of Deque. Returns
 * `true` if the operation is successful, or `false` otherwise.
 * - `boolean insertLast()` Adds an item at the rear of Deque. Returns
 * `true` if the operation is successful, or `false` otherwise.
 * - `boolean deleteFront()` Deletes an item from the front of Deque.
 * Returns `true` if the operation is successful, or `false` otherwise.
 * - `boolean deleteLast()` Deletes an item from the rear of Deque.
 * Returns `true` if the operation is successful, or `false` otherwise.
 * - `int getFront()` Returns the front item from the Deque. Returns `-1`
 * if the deque is empty.
 * - `int getRear()` Returns the last item from Deque. Returns `-1` if the
 * deque is empty.
 * - `boolean isEmpty()` Returns `true` if the deque is empty, or `false`
 * otherwise.
 * - `boolean isFull()` Returns `true` if the deque is full, or `false`
 * otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= k <= 1000`
 * - `0 <= value <= 1000`
 * - At most `2000` calls will be made to `insertFront`, `insertLast`,
 * `deleteFront`, `deleteLast`, `getFront`, `getRear`, `isEmpty`, `isFull`.
 *
 * @param {number} k
 */
const MyCircularDeque = function (k) {
    this.k = k; // Maximum size of the deque
    this.size = 0; // Current size of the deque
    this.data = new Array(k); // Array to store the deque elements
    this.front = 0; // Pointer to the front of the deque
    this.rear = k - 1; // Pointer to the rear of the deque
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false;

    // Move front pointer backward in circular fashion
    this.front = (this.front - 1 + this.k) % this.k;
    this.data[this.front] = value;
    this.size++;
    return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false;

    // Move rear pointer forward in circular fashion
    this.rear = (this.rear + 1) % this.k;
    this.data[this.rear] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) return false;

    // Move front pointer forward in circular fashion
    this.front = (this.front + 1) % this.k;
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) return false;

    // Move rear pointer backward in circular fashion
    this.rear = (this.rear - 1 + this.k) % this.k;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1;

    return this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1;

    return this.data[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.k;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
