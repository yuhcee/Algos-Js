/**
 * **13. Roman to Integer**
 *
 * Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
 *
 * For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written
 * as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX` + `V` +
 * `II`.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for
 * four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five
 * we subtract it making four. The same principle applies to the number nine, which is written as `IX`.
 *
 * There are six instances where subtraction is used:
 *
 * `I` can be placed before `V` (5) and `X` (10) to make `4` and `9`.
 * `X` can be placed before `L` (50) and `C` (100) to make `40` and `90`.
 * `C` can be placed before `D` (500) and `M` (1000) to make `400` and `900`.
 *
 * Given a roman numeral, convert it to an integer.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 15`
 * - `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
 * - It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = (s) => {
    // Used to reference what each string (romain character) value is
    const romanToNumMap = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };
    let romanValue = 0;

    // We need to iterate the string to find each value
    for (let i = 0; i < s.length; i++) {
        // Grab the current letter
        let letter = s[i];

        // Grab the second letter next to current to check if special conditions are there (such as IV, CM etc.)
        let letters = s[i] + s[i + 1];

        // We want to check first if a special combo exist
        if (letters in romanToNumMap) {
            // If exist, add the value
            romanValue += romanToNumMap[letters];
            // Increment i since we do not want to repeat the character next to.
            // For example: currentRomain =>"I" and Combo => "IV".
            // Whole value is 4. If we don't add i, next iteraction will say we are at "V" now when it has already been added.
            i++;
            continue;
        }

        // Add single romain value if special character not present
        romanValue += romanToNumMap[letter];
    }

    // Return total value
    return romanValue;
};

const s = 'III';
// Output: 3
// Explanation: III = 3.
console.log(romanToInt(s));

const s1 = 'LVIII';
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
console.log(romanToInt(s1));

const s2 = 'MCMXCIV';
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
console.log(romanToInt(s2));
