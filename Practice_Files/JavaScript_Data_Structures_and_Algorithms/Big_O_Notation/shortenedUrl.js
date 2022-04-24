/**
 *  **535. Encode and Decode TinyURL**
 * #### Note: This is a companion problem to the System Design problem: Design TinyURL.
 *
 * TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`. Design a class to encode a URL and decode a tiny URL.
 *
 * There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a
 * URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 *
 * Implement the `Solution` class:
 *
 * - `Solution()` Initializes the object of the system.
 * - `String encode(String longUrl)` Returns a tiny URL for the given `longUrl`.
 * - `String decode(String shortUrl)` Returns the original long URL for the given `shortUrl`. It is
 * guaranteed that the given `shortUrl` was encoded by the same object.
 *
 */

let codeDb = new Map(),
    urlDb = new Map();
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const BASE_URL = 'http://tinyurl.com/';

const getCode = () => {
    return new Array(6)
        .fill()
        .map((_) => chars.charAt(~~(Math.random() * 62)))
        .join('');
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
    let code = getCode();

    while (codeDb.has(code)) code = getCode();

    codeDb.set(code, longUrl);

    const shortUrl = BASE_URL + code;

    urlDb.set(shortUrl, longUrl);

    return shortUrl;
};

console.log(getCode());
