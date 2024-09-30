/**
 * **1381. Design a Stack With Increment Operation**
 *
 * Design a stack that supports increment operations on its elements.
 *
 * Implement the `CustomStack` class:
 *
 * - `CustomStack(int maxSize)` Initializes the object with `maxSize`
 * which is the maximum number of elements in the stack.
 * - `void push(int x)` Adds x to the top of the stack if the stack has
 * not reached the `maxSize`.
 * - `int pop()` Pops and returns the top of the stack or `-1` if the stack
 * is empty.
 * - `void inc(int k, int val)` Increments the bottom `k` elements of the
 * stack by `val`. If there are less than `k` elements in the stack, increment
 * all the elements in the stack.
 *
 * **Constraints:**
 *
 * - `1 <= maxSize, x, k <= 1000`
 * - `0 <= val <= 100`
 * - At most `1000` calls will be made to each method of `increment`, `push` and `pop` each
 * separately.
 *
 * @param {number} maxSize
 */
const CustomStack = function (maxSize) {
    this.stack = []; // Array to represent the stack
    this.maxSize = maxSize; // Maximum size of the stack
    this.incrementTracker = []; // Tracks the incremental additions to elements
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    // Push only if the current size is less than maxSize
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
        this.incrementTracker.push(0); // Initialize the increment tracker for the new element
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    // Pop and return the top element or -1 if the stack is empty
    if (this.stack.length === 0) {
        return -1;
    }

    let index = this.stack.length - 1;

    // Apply the increment to the current top element
    if (index > 0) {
        this.incrementTracker[index - 1] += this.incrementTracker[index];
    }

    let poppedValue = this.stack.pop() + this.incrementTracker.pop(); // Add the incremental value to the popped value
    return poppedValue;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    // Increment the bottom k elements
    let limit = Math.min(k, this.stack.length); // Apply the increment to at most the stack's size
    if (limit > 0) {
        this.incrementTracker[limit - 1] += val; // Add val to the last element in the range of bottom k elements
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
