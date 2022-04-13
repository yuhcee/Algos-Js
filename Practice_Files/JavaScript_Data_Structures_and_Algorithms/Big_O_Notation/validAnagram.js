/**
 * ** validAnagram**
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase or name, formed by rearranging the letters of another, such as *cinema*,
 * formed from *iceman*
 *
 * Return *true if words are anagram of the other, if not, return false.*
 */

function validAnagram() {
    // extract params from native function arguments
    let [str1, str2] = arguments;

    if (str1.length !== str2.length) {
        return false;
    }

    // iterate through str1
    for (let char of str1) {
        // check if char exists in str2
        if (str2.includes(char)) {
            // replace with empty space and reassign to str2
            str2 = str2.replace(char, '');
        } else {
            // char is not found, return false
            return false;
        }
    }

    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('', 'ab'));
console.log(validAnagram('aaz', 'zaz'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('cat', 'act'));

const validAnagramWithFrequencyCounter = (first, second) => {};
