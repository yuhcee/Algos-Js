/**
 * **1160. Find Words That Can Be Formed by Characters**
 *
 * You are given an array of strings `words` and a string `chars`.
 * A string is **good** if it can be formed by characters from chars (each character can only be used once)
 *
 * *Return the sum of lengths of all good strings in words.*
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
    let count = 0,
        oldChars = chars,
        isGood = true;

    for (let word of words) {
        let letters = word.split('');

        while (letters.length > 0) {
            let char = letters.pop();

            if (chars.includes(char)) chars = chars.replace(char, '');
            else {
                isGood = false;
                break;
            }
        }
        if (isGood) count += word.length;
        chars = oldChars;
        isGood = true;
    }

    return count;
};

const words = ['cat', 'bt', 'hat', 'tree'],
    chars = 'atach';
console.log(countCharacters(words, chars));
const words2 = [
        'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
        'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
        'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
        'boygirdlggnh',
        'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
        'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
        'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
        'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
        'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
        'oxgaskztzroxuntiwlfyufddl',
        'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
        'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
        'eeilfdaookieawrrbvtnqfzcricvhpiv',
        'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
        'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
        'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
        'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
        'teyygdmmyadppuopvqdodaczob',
        'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
        'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
    ],
    chars2 = 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp';
    console.log(countCharacters(words2, chars2));
