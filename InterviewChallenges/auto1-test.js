function f(a, b, c) {
    const initialArgs = Array.from(arguments);
    if (initialArgs.length === f.length) {
        return a + b + c;
    }
    function fun() {
        const nextArgs = Array.from(arguments);
        return f.apply(null, [...initialArgs, ...nextArgs]);
    }
    return fun;
}

// console.log(f(1, 1)(1))

console.assert(f(1)(1)(1) === 3);
console.assert(f(1, 2)(4) === 7);
console.assert(f(6)(1, 9) === 16);
console.assert(f(6, 1, 9) === 16);
