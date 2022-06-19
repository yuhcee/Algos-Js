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
};
