/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let str = '';
    for (let i = 0; i < s.length; i += 1) {
        if (!str) {
            str = s[i];
            continue;
        }

        let char = str[str.length - 1];
        
        if (char === char.toUpperCase()) {
            if (s[i] === char.toLowerCase()) str = str.slice(0, str.length - 1);
            else str += s[i];
        } else {
            if (s[i] === char.toUpperCase()) str = str.slice(0, str.length - 1);
            else str += s[i];
        }
    }
    return str;
};
