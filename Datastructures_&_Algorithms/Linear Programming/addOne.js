/**
 * Implement the function that will add one on each subsequent call.
 * Please implement `"getValue"` method also:

 * `console.log(addOne()()().getValue()); // 3`
 * `console.log(addOne().getValue()); // 1`
 * `console.log(addOne()().getValue()); // 2`
*/

// write a function addOne
// set initial value to 0
// when invoked, increment value by 1
// bind return function to the addOne function
// declare an inner function, getValue that returns the value

// set initialValue to 0 as a default paramemter
function addOne(num = 0) {
    // increment num on each call
    num++;
    // return a copy of our main function, passing the incremented value as a parameter
    // it will remember the current value, so that it can be incremented on the next call
    // console.log(Object.assign(addOne.bind(null, num), { getValue: () => num }));
    return Object.assign(addOne.bind(null, num), {
        // return the incremented value with getValue function
        getValue: () => num,
    });
}

console.log(addOne().getValue()); // 1`
console.log(addOne()().getValue()); // 2`
console.log(addOne()()().getValue()); // 3
console.log(addOne()()()().getValue());
console.log(addOne()()()()().getValue());