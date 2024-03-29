/**
 * **946. Validate Stack Sequences**
 *
 * Given two integer arrays `pushed` and `popped` each with distinct values, return *`true` if
 * this could have been the result of a sequence of push and pop operations on an initially
 * empty stack, or `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= pushed.length <= 1000`
 * - `0 <= pushed[i] <= 1000`
 * - All the elements of pushed are unique.
 * - `popped.length == pushed.length`
 * - `popped` is a permutation of `pushed`.
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// Define a function called validateStackSequences that takes in two arrays as arguments
const validateStackSequences = function (pushed, popped) {
    // Create an empty array called stack to represent the stack
    const stack = [];
    // Initialize a variable i to 0 to represent the current index of the popped array
    let i = 0;
    // Loop through the pushed array using a for...of loop, using num as the iterator variable
    for (const num of pushed) {
        // Push the current number onto the stack
        stack.push(num);
        // While the stack is not empty and the top element of the stack equals the current element of the popped array
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            // Pop the top element off the stack
            stack.pop();
            // Increment i to move to the next element of the popped array
            i++;
        }
    }
    // If the stack is empty, then all elements were successfully popped off and the sequences are valid, so return true
    // Otherwise, return false
    return stack.length === 0;
};

const pushed = [1, 2, 3, 4, 5],
    popped = [4, 5, 3, 2, 1];
// Output: true
/* Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 */
console.log(validateStackSequences(pushed, popped));

const pushed2 = [1, 2, 3, 4, 5],
    popped2 = [4, 3, 5, 1, 2];
// Output: false
// Explanation: 1 cannot be popped before 2.
console.log(validateStackSequences(pushed2, popped2));
