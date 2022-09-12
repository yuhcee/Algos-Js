/**
 * **393. UTF-8 Validation**
 * 
 * Given an integer array `data` representing the data, return whether it is a valid **UTF-8** encoding (i.e. 
 * it translates to a sequence of valid UTF-8 encoded characters).
 * 
 * A character in **UTF8** can be from **1 to 4 bytes** long, subjected to the following rules:
 * 
 * 1. For a **1-byte** character, the first bit is a `0`, followed by its Unicode code.
 * 2. For an **n-bytes** character, the first `n` bits are all one's, the `n + 1` bit is `0`, followed by `n 
 * - 1` bytes with the most significant `2` bits being `10`.
 * 
 * This is how the UTF-8 encoding would work:
 * ```
 *  Number of Bytes   |        UTF-8 Octet Sequence
                       |              (binary)
   --------------------+-----------------------------------------
            1          |   0xxxxxxx
            2          |   110xxxxx 10xxxxxx
            3          |   1110xxxx 10xxxxxx 10xxxxxx
            4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 *  ```
 * `x` denotes a bit in the binary form of a byte that may be either `0` or `1`.
 * 
 * **Note**: The input is an array of integers. Only the **least significant 8 bits** of each integer is used 
 * to store the data. This means each integer represents only 1 byte of data.
 * 
 * @param {number[]} data
 * @return {boolean}
 */

const myObj = {
    0: 1,
    110: 2,
    1110: 3,
    11110: 4,
    111110: 5,
    1111110: 6,
    11111110: 7,
    11111111: 8,
};
const validUtf8 = function (data) {
    let j = 0,
        count = 0;

    while (j < data.length) {
        let ele = data[j].toString(2);
        ele = '00000000'.substring(ele.length) + ele;
        if (ele.substring(0, 2) === '10') return false;

        for (key in myObj) {
            if (ele.startsWith(key)) count = myObj[key];
        }

        if (count > 4) return false;

        for (var i = j + 1; i < j + count; i++) {
            let elem = data[i];
            if (elem === undefined) return false;
            let val = elem.toString(2);
            val = '00000000'.substring(val.length) + val;
            if (val.substring(0, 2) !== '10') return false;
        }
        j = i;
    }

    return true;
};

const data = [197, 130, 1];
// Output: true
/* Explanation: data represents the octet sequence: 11000101 10000010 00000001.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character. */
console.log(validUtf8(data));

const data1 = [235, 140, 4];
// Output: false
/* Explanation: data represented the octet sequence: 11101011 10001100 00000100.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid. */
console.log(validUtf8(data1));

var validUtf8_ = function (data) {
    let bytes = 0;

    for (let num of data) {
        let res = '';

        // Convert to binary
        for (let i = 0; i < 32; i++) {
            res += String(num >>> 31);
            num <<= 1;
        }

        // Store only the first 8 least significant bits
        const bin = [...res].splice(-8).join('');

        if (bytes === 0) {
            // Count the number of 1's
            let i = 0;
            while (bin[i] && bin[i] !== '0') {
                i++;
            }
            bytes = i;

            // 1 byte character
            if (bytes === 0) {
                continue;
            }

            if (bytes > 4 || bytes === 1) {
                return false;
            }
        } else {
            // Check if the first 2 bits of the binary representation of the number are 1 and 0
            if (bin.slice(0, 2).localeCompare('10')) {
                return false;
            }
        }

        bytes--;
    }

    return bytes === 0;
};
