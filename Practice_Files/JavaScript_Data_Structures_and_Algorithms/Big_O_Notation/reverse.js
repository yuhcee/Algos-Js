/**
 * **Reverse**
 *
 * Write a recursive function called **reverse** which accepts a string and returns a new string in
 * reverse.
 */

const reverse = (str) => {
    return str.split('').reverse().join('');
};

console.log(reverse('awesome'));
console.log(reverse('akankwe'));

const reverseRecursive = (str) => {
    if (str.length <= 1) return str;

    return reverseRecursive(str.slice(1)) + str[0];
};


console.log(reverseRecursive('awesome'));
console.log(reverseRecursive('akankwe'));