/**
 * **isPalindrome**
 *
 * Write a recursive function called **isPalindrome** which returns `true` if the string passed to
 * it is a `palindrome` (reads the same forward and backward). Otherwise it returns `false`.
 */

const isPalindrome = (str) => {
    let l = 0,
        r = str.length - 1;

    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }

    return true;
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

const isPalindromeRecursive = (str) => {
    let l = 0,
        r = str.length - 1;

    if (str.length === 1) return true;
    if (str.length === 2) return str[l] === str[r];

    return str[0] === str[r] ? isPalindromeRecursive(str.slice(1, -1)) : false;
};

console.log(isPalindromeRecursive('awesome')); // false
console.log(isPalindromeRecursive('foobar')); // false
console.log(isPalindromeRecursive('tacocat')); // true
console.log(isPalindromeRecursive('amanaplanacanalpanama')); // true
console.log(isPalindromeRecursive('amanaplanacanalpandemonium')); // false
