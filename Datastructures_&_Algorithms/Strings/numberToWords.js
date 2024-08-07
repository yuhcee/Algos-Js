/**
 * **273. Integer to English Words**
 *
 * Convert a non-negative integer `num` to its English words
 * representation.
 *
 * **Constraints:**
 *
 * - `0 <= num <= 231 - 1`
 *
 * @param {number} num
 * @return {string}
 */
const numberToWords = function (num) {
    if (num === 0) return 'Zero';

    const belowTwenty = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    const helper = (num) => {
        if (num === 0) return '';
        if (num < 20) return belowTwenty[num] + ' ';
        if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
        return belowTwenty[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    };

    let result = '';
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};

const num = 123;
// Output: "One Hundred Twenty Three"
console.log(numberToWords(num));

const num1 = 12345;
// Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(num1));

const num2 = 1234567;
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(num2));
