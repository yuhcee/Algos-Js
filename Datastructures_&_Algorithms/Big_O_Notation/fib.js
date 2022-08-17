/**
 * **Fib**
 *
 * Write a recursive function called **fib** which accepts a number and returns the *n*th number in
 * the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,
 * 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the
 * sum of the previous two numbers.
 */

const fib = (num, memo = {}) => {
    if (num <= 2) return 1;
    const key = num;

    if (key in memo) return memo[key];

    memo[key] = fib(num - 1, memo) + fib(num - 2, memo);

    return memo[key];
};

console.log(fib(4));
console.log(fib(24));
console.log(fib(1000));
