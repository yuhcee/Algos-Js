/**
 * **93. Restore IP Addresses**
 *
 * A valid IP address consists of exactly four integers separated by single dots. Each integer is
 * between `0` and `255` (**inclusive**) and cannot have leading zeros.
 *
 * - For example, `"0.1.2.201"` and `"192.168.1.1"` are **valid** IP addresses, but `"0.011.255.245"`,
 * `"192.168.1.312"` and `"192.168@1.1"` are **invalid** IP addresses.
 *
 * Given a string `s` containing only digits, return *all possible valid IP addresses that can be
 * formed by inserting dots into `s`. You are **not** allowed to reorder or remove any digits in `s`.
 * You may return the valid IP addresses in **any** order.
 *
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 20`
 * - `s` consists of digits only.
 *
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
    let result = [];
    // Helper function to generate all IP addresses
    function generateIpAddresses(s, segments, current) {
        // Base case: if we have generated 4 segments, check if the IP address is valid
        if (segments.length === 4) {
            if (s.length === 0) {
                result.push(segments.join('.'));
            }
            return;
        }

        // Early stopping
        if (s.length > (4 - segments.length) * 3) {
            return;
        }

        // Try all possible segment lengths
        for (let i = 1; i <= 3; i++) {
            if (s.length >= i) {
                let segment = s.substring(0, i);
                if (isValidSegment(segment)) {
                    // Add the segment to the current IP address and recurse
                    generateIpAddresses(s.substring(i), segments.concat([segment]), current + 1);
                }
            }
        }
    }
    generateIpAddresses(s, [], 0);
    return result;
};

function isValidSegment(s) {
    // s should be between 1 and 3 digits long
    if (s.length > 3) {
        return false;
    }
    // s should not have leading zeros
    if (s.length > 1 && s[0] === '0') {
        return false;
    }
    // s should be less than or equal to 255
    if (parseInt(s) > 255) {
        return false;
    }
    return true;
}

const s = '25525511135';
// Output: ["255.255.11.135","255.255.111.35"]

console.log(restoreIpAddresses(s));
