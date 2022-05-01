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
