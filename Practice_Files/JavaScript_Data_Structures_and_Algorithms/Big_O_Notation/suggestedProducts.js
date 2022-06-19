/**
 * **1268. Search Suggestions System**
 *
 * You are given an array of strings `products` and a string `searchWord`.
 *
 * Design a system that suggests at most three product names from `products` after each character
 * of `searchWord` is typed. Suggested products should have common prefix with `searchWord`. If
 * there are more than three products with a common prefix return the three lexicographically
 * minimums products.
 *
 * Return *a list of lists of the suggested products after each character of `searchWord` is
 * typed*.
 *
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
    products.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < products.length; i++) {
        // filtering the product on each search so that we can compare one current char only
        products = products.filter((p) => p[i] === searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
};

const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    searchWord = 'mouse';
/* Output: [
    ['mobile', 'moneypot', 'monitor'],
    ['mobile', 'moneypot', 'monitor'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
]; */
/* Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"] */
console.log(suggestedProducts(products, searchWord));

const products1 = ['havana'],
    searchWord1 = 'havana';
// Output: [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']];
console.log(suggestedProducts(products1, searchWord1));

const products2 = ['bags', 'baggage', 'banner', 'box', 'cloths'],
    searchWord2 = 'bags';
/* Output: [['baggage', 'bags', 'banner'], ['baggage', 'bags', 'banner'], ['baggage', 'bags'], ['bags']]; */
console.log(suggestedProducts(products2, searchWord2));

const products3 = ['bans', 'bondage', 'band', 'bond', 'dress'],
    searchWord3 = 'bans';
/* Output: [ [ 'bans', 'bondage', 'band' ], [ 'bans', 'band' ] ] */
console.log(suggestedProducts(products3, searchWord3));
