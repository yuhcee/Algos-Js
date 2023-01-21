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
const restoreIpAddresses = function (s) {};


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