/**
 * **383. Ransom Note**
 *
 * Given two strings `ransomNote` and `magazine`, return *`true` if `ransomNote` can be constructed by using
 * the letters from `magazine` and false otherwise*.
 *
 * Each letter in `magazine` can only be used once in `ransomNote`.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// const canConstruct = function (ransomNote, magazine) {
//     let isGood = true;

//     for (let char of ransomNote) {
//         if (magazine.includes(char)) magazine = magazine.replace(char, '');
//         else {
//             isGood = false;
//             break;
//         }
//     }

//     return isGood;
// };

// ========== Hash Map Solution ============

const canConstruct = function (ransomNote, magazine) {
    const charCounter = {};

    for (let char of magazine) {
        charCounter[char] = charCounter[char] + 1 || 1;
    }

    for (let char of ransomNote) {
        if (charCounter[char]) {
            charCounter[char]--;
        } else {
            return false;
        }
    }

    return true;
};

const ransomNote = 'a',
    magazine = 'b';
// Output: false
console.log(canConstruct(ransomNote, magazine));

const ransomNote1 = 'aa',
    magazine1 = 'ab';
// Output: false
console.log(canConstruct(ransomNote1, magazine1));

const ransomNote2 = 'aa',
    magazine2 = 'aab';
// Output: true
console.log(canConstruct(ransomNote2, magazine2));
