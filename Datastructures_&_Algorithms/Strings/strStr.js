/**
 * **28. Find the Index of the First Occurrence in a String**
 *
 * Given two strings `needle` and `haystack`, return the index of the first occurrence of
 * `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.
 *
 * **Constraints:**
 *
 * - `1 <= haystack.length, needle.length <= 104`
 * - `haystack` and `needle` consist of only lowercase English characters.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }

    let haystackArr = haystack.split('');
    const first = needle[0];
    let buffer = 0;

    while (haystackArr.indexOf(first) !== -1) {
        if (haystackArr.length < needle.length) {
            break;
        }
        const index = haystackArr.indexOf(first);
        const str = haystack.substring(index, index + needle.length);
        if (str === needle) {
            return index + buffer;
        } else {
            haystackArr = haystackArr.splice(index + 1);
            haystack = haystack.substring(index + 1);
            buffer += index + 1;
        }
    }

    return -1;
};

const haystack = 'sadbutsad',
    needle = 'sad';
// Output: 0
/* Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0. */
console.log(strStr(haystack, needle));
