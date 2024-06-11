/**
 * **1122. Relative Sort Array**
 *
 * Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct, and
 * all elements in `arr2` are also in `arr1`.
 *
 * Sort the elements of `arr1` such that the relative ordering of items in
 * `arr1` are the same as in `arr2`. Elements that do not appear in `arr2`
 * should be placed at the end of `arr1` in **ascending** order.
 *
 * **Constraints:**
 *
 * - `1 <= arr1.length, arr2.length <= 1000`
 * - `0 <= arr1[i], arr2[i] <= 1000`
 * - All the elements of `arr2` are distinct.
 * - Each `arr2[i]` is in `arr1`.
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
    // Create a map to store the order of elements in arr2
    const orderMap = new Map();
    for (let i = 0; i < arr2.length; i++) {
        orderMap.set(arr2[i], i);
    }

    // Sort arr1 based on the order defined in arr2
    arr1.sort((a, b) => {
        // If both elements are in arr2, sort by their order in arr2
        if (orderMap.has(a) && orderMap.has(b)) {
            return orderMap.get(a) - orderMap.get(b);
        }
        // If only one of the elements is in arr2, the one in arr2 comes first
        if (orderMap.has(a)) {
            return -1;
        }
        if (orderMap.has(b)) {
            return 1;
        }
        // If neither element is in arr2, sort by their value
        return a - b;
    });

    return arr1;
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    arr2 = [2, 1, 4, 3, 9, 6];
// Output: [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray(arr1, arr2));


