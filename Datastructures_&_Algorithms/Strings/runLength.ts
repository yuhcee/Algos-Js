/**
 * **RunLength**
 *
 * Have the function `RunLength(str)` take the `str` parameter being passed and return a
 * compressed version of the string using the `Run-length encoding algorithm`. This algorithm
 * works by taking the occurrence of each repeating character and outputting that number along
 * with a single character of the repeating sequence.
 *
 * For example: `"wwwggopp"` would return `3w2g1o2p`. The string will not contain any numbers,
 * punctuation, or symbols.
 *
 * Once your function is working, take the final output string and intersperse it
 * character-by-character with your ChallengeToken.
 *
 * Your ChallengeToken: enpohq47kd68
 *
 *
 * @param {string} str
 * @returns {string}
 *
 */
const RunLength = (str: string): string => {
    let result: string = '';
    let count: number = 1;
    const CHALLENGETOKEN: string = 'enpohq47kd68';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }

    let output: string = '';

    for (let i = 0; i < result.length; i++) {
        output += result[i] + CHALLENGETOKEN[i];
    }
    const lastChar: number = CHALLENGETOKEN.length - result.length;

    return output + CHALLENGETOKEN.slice(-lastChar);
};
