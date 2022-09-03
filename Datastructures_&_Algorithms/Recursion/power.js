/**
 * **Power**
 *
 * Write a function called Power, that accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about
 * negetive bases and exponents.
 *
 */

const power = (base, exponent) => {
    if (exponent === 0) return 1;

    return base * power(base, exponent - 1);
};

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
console.log(power(2, 10));
