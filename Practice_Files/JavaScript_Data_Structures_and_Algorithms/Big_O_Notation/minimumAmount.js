/**
 * **Minimum Amount**
 *
 * Alex has a list of items to purchase at a market. The owner offers to discount each item after
 * the first one by the lowest marked price among the prior items. No item's price can be
 * discounted below 0, and the list may not be reordered. Calculate the playable amount.
 *
 * @param {*} arr
 * @returns
 */
const minimumAmount = (arr) => {
    const discounts = [arr[0]];

    for (let r = 1; r < arr.length; r++) {
        let discount;

        let lastDiscount = discounts.slice(-1);

        if (lastDiscount < 0) {
            discount = arr[r] - arr[r - 1];
        } else {
            discount = arr[r] - lastDiscount;
        }

        discounts.push(discount);

        discounts;
    }

    return discounts.reduce((a, c) => (c > 0 ? a + c : a));
};

console.log(minimumAmount([2, 5, 1, 4])); // 8
//  2, 3, 0, 3
console.log(minimumAmount([5, 1, 4, 9])); // 14
